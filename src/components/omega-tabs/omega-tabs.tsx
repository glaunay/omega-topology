import { Component, h, Element, Host, Listen, State, Method } from '@stencil/core';

@Component({
  tag: "omega-tabs",
  styleUrl: 'omega-tabs.css',
  shadow: false
})
export class OmegaTrim {
  @Element() el: HTMLElement;

  @State() uniprot_loaded = false;

  public static readonly tag = "omega-tabs";

  @Listen('FrontTopology.uniprot-downloaded', { target: 'window' })
  loadUniprot() {
    this.uniprot_loaded = true;
  }

  @Method()
  async goToTab(tab: string) {
    return this._goToTab(tab);
  }

  protected click(e: Event) {
    this._goToTab((e.target as HTMLAnchorElement).dataset.related);
  }

  protected _goToTab(related_to: string) {
    this.hideAll();

    const related_e = this.el.querySelector(`ul [data-related="${related_to}"]`) as HTMLElement;

    const is_active = related_e.classList.contains('active');

    this.removeActive();

    // Si c'est pas actif, on montre (sinon il sera caché)
    if (!is_active) {
      this.makeActive(related_e.dataset.related);
    }    
  }

  protected hideAll() {
    this.el.querySelectorAll('[tabs-container] .tab-target').forEach(e => e.classList.add('hide'));
    this.el.querySelector('[tabs-container] [hide-container]').classList.add('force-hide');

    (this.el.querySelector(`[tabs-container]`) as HTMLElement).style.padding = '0';
  }

  protected removeActive() {
    this.el.querySelectorAll(`ul .active`).forEach(e => e.classList.remove('active'));
  }

  protected makeActive(element: string) {
    const related_e = this.el.querySelector(`ul [data-related="${element}"]`) as HTMLElement;
    const tab_content_e = this.el.querySelector(`[tabs-container] [data-name="${element}"]`) as HTMLElement;
    const custom_padding = tab_content_e.dataset.padding ? tab_content_e.dataset.padding : '15';

    this.el.querySelectorAll('.last-active').forEach(e => e.classList.remove('last-active'));

    related_e.classList.add('active');
    tab_content_e.classList.remove('hide');
    (this.el.querySelector(`[tabs-container]`) as HTMLElement).style.padding = custom_padding + 'px';
    this.el.querySelector('[tabs-container] [hide-container]').classList.remove('force-hide');
    this.el.querySelector('[tabs-container] [hide-container] i').innerHTML = "arrow_left";
  }

  @Listen('omega-prune.selection')
  protected hideOrShow() {
    const i = this.el.querySelector('[tabs-container] [hide-container] i') as HTMLElement;

    if (i.innerText.includes('left')) {
      // Close
      const el = this.el.querySelector(`[tabs-container] [data-name="${this.last_active}"]`)
      el.classList.add('last-active', 'hide');
      i.innerText = "arrow_right";
    }
    else {
      const el = this.el.querySelector(`[tabs-container] .last-active`)
      el.classList.remove('last-active', 'hide');
      i.innerText = "arrow_left";
    }
  }

  @Listen('omega-graph.complete-reset', { target: 'window' })
  resetTabs() {
    this.hideAll();
    this.removeActive();
    this.el.querySelector('go-chart').data = undefined;
  }

  get last_active() {
    return (this.el.querySelector('.tab-target:not(.hide)') as HTMLElement).dataset.name;
  }

  /**
   * Rendu graphique.
   */
  render() {
    return (
      <Host style={{'z-index': '999'}}>
        <ul tabs-root class="nav nav-pills nav-fill" style={{'padding': '5px 10px 5px 10px'}}>
          <li class="nav-item">
            <a class="nav-link" href="#" data-related="trimming" onClick={e => this.click(e)}>Trimming</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-related="methods" onClick={e => this.click(e)}>Dectection methods</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-related="taxo" onClick={e => this.click(e)}>Taxonomy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-related="prune" onClick={e => this.click(e)}>Pruning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-related="go" onClick={e => this.click(e)}>GO Terms</a>
          </li>
        </ul>
        <div tabs-container>
          <div hide-container class="force-hide col-12" style={{cursor: 'pointer', 'user-select': 'none', 'padding': '0'}} onClick={() => this.hideOrShow()}>
            <i class="material-icons float-left text-primary">arrow_left</i>
            <span class="text-primary">Toggle</span>
          </div>
          
          <div style={{'margin-top': '5px'}}>
            <div class="tab-target hide" data-name="trimming">
              <omega-trim></omega-trim>
            </div>
            <div class="tab-target hide" data-name="methods">
              <omega-onto></omega-onto>
            </div>
            <div class="tab-target hide" data-name="taxo">
              <omega-taxo></omega-taxo>
            </div>
            <div class="tab-target hide" data-name="prune">
              <omega-prune></omega-prune>
            </div>
            <div class="tab-target hide" data-name="go" data-padding="10">
              <div class={this.uniprot_loaded ? "" : "hide"}>
                <go-chart></go-chart>
                <button type="button" onClick={() => this._goToTab('prune')} style={{'margin-top': '15px', 'margin-bottom': '5px'}}
                class="btn btn-primary btn-block">Switch to pruning</button>
              </div>
              <div class={this.uniprot_loaded ? "hide" : ""}>
                <div class="embedded-preloader">
                  <div class="preloader-loader"></div>
                </div>
                <div class="text-center font-weight-bold">Loading UniProt data...</div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
} 
