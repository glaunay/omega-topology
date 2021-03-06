import { Component, h, Listen, Element, State, Event, EventEmitter } from '@stencil/core';
import FrontTopology from '../../utils/FrontTopology';
import { PruneAddProperty, PruneDeleteProperty } from '../../utils/types';

/**
 * Allow the user to select nodes, browse into existing nodes in the graph,
 * then consider them as seeds, to make a subgraph (prune).
 * 
 * omega-prune is made to be included inside omega-tabs.
 */
@Component({
  tag: "omega-prune",
  styleUrl: 'omega-prune.css',
  shadow: false
})
export class OmegaPrune {
  @Element() el: HTMLElement;

  /** Register if UniProt data has been downloaded or not. */
  @State() uniprot_loaded = false;

  /** Register UniProt download as OK. */
  @Listen('FrontTopology.uniprot-downloaded', { target: 'window' })
  loadUniprot() {
    this.uniprot_loaded = true;
  }

  /** Fires when user start selection mode. */
  @Event({
    eventName: "omega-prune.selection"
  }) selectEvent: EventEmitter<void>;

  /** Fires when user end selection mode. */
  @Event({
    eventName: "omega-prune.end-selection"
  }) endSelectEvent: EventEmitter<void>;

  /** Fires when user ask a global unselect of all nodes. */
  @Event({
    eventName: "omega-prune.unselect-all"
  }) unSelectEvent: EventEmitter<void>;

  /** Register selected nodes. */
  @State() selected: string[] = [];

  /** Register if current mode is selection or not. */
  @State() in_selection = false;

  /** Register currently selected distance. */
  protected distance = Infinity;

  /** Listen for a prune request, and execute it. */
  @Listen('omega-graph.prune-make', { target: 'window' })
  emitPrune() {
    FrontTopology.prune(this.selected, this.distance);
  }

  /** Listen for a node click during selection mode, add it to selected nodes. */
  @Listen('omega-graph.prune-add', { target: 'window' })
  protected addNode(e: CustomEvent<PruneAddProperty>) {
    const to_add = typeof e.detail === 'string' ? [e.detail as string] : [...e.detail as string[]];
    this.selected = [...new Set([...this.selected, ...to_add])];
  }

  /** Listen for a node click during selection mode, remove it from selected nodes. */
  @Listen('omega-graph.prune-remove', { target: 'window' })
  protected removeNode(e: CustomEvent<PruneDeleteProperty>) {
    const s = new Set(this.selected);
    s.delete(e.detail);
    this.selected = [...s];
  }

  /** Listen for a unselect all request, reset selected nodes array. */
  @Listen('omega-graph.prune-reset', { target: 'window' })
  protected resetNodes() {
    this.selected = [];
    this.endSelection();
  }

  /** Start the selection mode. */
  protected beginSelection() {
    this.selectEvent.emit();
    this.in_selection = true;
  }

  /** End the selection mode. */
  protected endSelection() {
    this.endSelectEvent.emit();
    this.in_selection = false;
  }

  /** Unselect all nodes, and exit selection mode. */
  protected resetSelection() {
    this.unSelectEvent.emit();
    this.in_selection = false;
  }

  /** Check if the choosen distance is valid. */
  protected updateDistance(event: Event) {
    const dist = (event.target as HTMLSelectElement).value;

    if (dist === "Inf") {
      this.distance = Infinity;
    }
    else if (parseInt(dist)) {
      this.distance = parseInt(dist);
    }
  }

  /**
   * Rendu graphique.
   */
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col" style={{'padding-left': '0', 'min-width': '300px'}}>
            <div class={this.uniprot_loaded ? "" : "hide"}>
              <network-table></network-table>
            </div>
            <div class={this.uniprot_loaded ? "hide" : ""}>
              <div class="embedded-preloader">
                <div class="preloader-loader"></div>
              </div>
              <div class="text-center font-weight-bold">Loading UniProt data...</div>
            </div>
          </div>

          <div class="col" style={{'padding-right': '0'}}>
            <div selected-elements>
              {(this.selected.length ? `You have selected ${this.selected.length} nodes.`
                : "You don't have selected any node.")}
            </div>

            <hr></hr>

            <div select-element>
              <button type="button" class="btn btn-primary btn-block" style={{ 'margin-right': '5px' }} onClick={this.in_selection ? () => this.endSelection() : () => this.beginSelection()}>{this.in_selection ? "Finish selection" : "Select nodes"}</button>
              <button type="button" class={this.selected.length ? "btn btn-warning btn-block" : "btn btn-danger btn-block"} onClick={() => this.emitPrune()}>{this.selected.length ? "Prune" : "Cancel prune"}</button>
              {this.selected.length ? <button type="button" class="btn btn-dark btn-block" onClick={() => this.resetSelection()}>Unselect all</button> : ""}

              <hr></hr>

              <form style={{ 'margin-top': '5px' }}>
                <div class="form-group">
                  <label htmlFor="select_distance">Maximum distance from seeds<br></br></label>
                  <select class="form-control" id="select_distance" onChange={e => this.updateDistance(e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="Inf" selected>Infinity</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 
