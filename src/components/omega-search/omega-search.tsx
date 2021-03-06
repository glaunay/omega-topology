import { Component, h, Element, Event, EventEmitter, State } from '@stencil/core';
import FrontTopology from '../../utils/FrontTopology';
import { TinyProtein } from 'omega-topology-fullstack';

/**
 * Component used to search nodes inside the graph, with annotation informations.
 * 
 * This component is not properly finished, TODO !
 */
@Component({
  tag: "omega-search",
  styleUrl: 'omega-search.css',
  shadow: false
})
export class OmegaSearch {
  @Element() el: HTMLElement;

  /** Fires when the user select nodes to highlight (TODO) */
  @Event({
    eventName: "omega-search.search"
  }) search: EventEmitter<string[]>;

  emit(nodes: string[]) {
    this.search.emit(nodes);
  }

  /** Matched proteins for query. */
  @State()
  protected matched_objects: TinyProtein[] = [];

  /** Used to smooth the search. */
  protected last_timeout = 0;

  /** Search function. Takes a oninput event. */
  searchInAnnots(e: Event) {
    const t = e.target as HTMLInputElement;

    if (this.last_timeout) {
      clearTimeout(this.last_timeout);
      this.last_timeout = 0;
    }

    if (t.value === "") {
      this.matched_objects = [];
      return;
    }

    // Search only if the input hasn't changed in 200 ms
    this.last_timeout = setTimeout(() => {
      // maybe switch to .advancedSearchInGraphByAnnotation in order to show why the protein matched
      const matching = FrontTopology.topo.searchInGraphByAnnotation(t.value);
  
      this.matched_objects = matching.map(p => FrontTopology.topo.uniprot_container.getTiny(p));
    }, 200) as unknown as number;
  }

  /** HTML search results generator. */
  protected generateMatched() {
    if (this.matched_objects.length === 0) {
      return;
    }

    return (
      <ul class="list-group">
        {this.matched_objects.map(
          e => <li class="list-group-item">{e.accession} ({e.protein_names.join(', ')})</li>
        )}
      </ul>
    );
  }

  /** Quick access to container used to put search content. */
  get search_container() {
    return this.el.querySelector('.search-body-container');
  }

  /**
   * Rendu graphique.
   */
  render() {
    return (
      <div>
        <div class="search-container" title="Search in graph" data-toggle="modal" data-target="#modalSearch">
          <i class="material-icons">search</i>
        </div>

        <div class="modal fade" id="modalSearch" tabindex="-1" role="dialog" aria-labelledby="modalSearchAll" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalResetAll">Search</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" onInput={e => this.searchInAnnots(e)}/>

                <div class="search-body-container">{this.generateMatched()}</div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 
