/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  D3GraphBase,
  D3Link,
  D3Node,
  MakeGraphEvent,
  PruneAddProperty,
  PruneDeleteProperty,
  TrimProperties,
} from './utils/types';
import {
  UniprotProtein,
} from 'omega-topology-fullstack/build/UniprotContainer';
import {
  PSQData,
} from 'omega-topology-fullstack';
import {
  SubNode,
  TreeLike,
} from '@mmsb/selectionnable-tree';

export namespace Components {
  interface OmegaArtefact {}
  interface OmegaDownload {}
  interface OmegaGraph {
    /**
    * Universal method to download the graph in the file format you want.
    * @param file_name Filename (without extension)
    * @param type Could be "image", "JSON" or "tabular"
    */
    'downloadGraphAs': (file_name: string, type?: string) => Promise<void>;
    /**
    * Start the download of the graph as a JPG image
    * @param image_name Filename. Could be wrapped in a CustomEvent.
    */
    'downloadGraphAsImage': (image_name?: string | CustomEvent<any>) => Promise<void>;
    /**
    * Start the download of the graph as a JSON file
    * @param name Filename. Could be wrapped in a CustomEvent.
    */
    'downloadGraphAsJSON': (name?: string | CustomEvent<any>) => Promise<void>;
    /**
    * Start the download of the graph as a tabulated file
    * @param name Filename. Could be wrapped in a CustomEvent.
    */
    'downloadGraphAsTab': (name?: string | CustomEvent<any>) => Promise<void>;
    /**
    * Get `D3Link[]` objects linked to a node ID.
    */
    'getLinksOf': (id: string) => Promise<D3Link[]>;
    /**
    * Get a `D3Node` object according to its ID.
    */
    'getNode': (id: string) => Promise<D3Node>;
    /**
    * Highlight one or multiple nodes, according to their IDs.
    * @param node_ids Must be nodes IDs (protein accession numbers)
    */
    'highlightNode': (...node_ids: string[]) => Promise<void>;
    /**
    * Make the graph, using ForceGraph3D.  Able to receive a *CustomEvent* holding a *detail* property, containing a *graph_base* property of type `D3GraphBase` (type `MakeGraphEvent`).  You can also just give a `D3GraphBase` complient object to this method.
    */
    'make3dGraph': (data: CustomEvent<{ graph_base: D3GraphBase; }> | D3GraphBase) => Promise<void>;
    /**
    * Remove highlighting from one or multiple nodes, according to their IDs.
    * @param node_ids Must be nodes IDs (protein accession numbers)
    */
    'removeHighlighting': (...node_ids: string[]) => Promise<void>;
    /**
    * Remove a node from the graph.  Warning, with the new graph actualisation system, the graph must be reheated after the removal !
    * @param removed_nodes Remove a node according to its reference (`D3Node`), to its ID (`string`), or with a ID-Regex-matcher (`RegExp`).
    */
    'removeNode': (...removed_nodes: (string | RegExp | D3Node)[]) => Promise<void>;
    /**
    * Remove the highlighting for all the nodes.
    */
    'resetHighlighting': () => Promise<void>;
    /**
    * Serialize graph into a string using a custom function.
    * @template T
    * @param encoder Called for each link in graph, with node1 & node2 as link source and target. Accumulator is undefined during the first call. Return value of the function will be used as accumulator during the next function call.
    * @param finalize_function Optional. Called after link iteration.
    * @returns R if finalize_function is defined, string instead.
    */
    'serialize': <T, R = string>(encoder: (link: D3Link, node1: D3Node, node2: D3Node, accumulator?: T) => T, finalize_function?: (composed: T) => R) => Promise<string | R>;
    /**
    * Specie representated by the graph
    */
    'specie': string;
    /**
    * Serialize the graph to JSON (using the `.serialize()` method).
    */
    'toJSON': () => Promise<string>;
    /**
    * Serialize the graph to tabular data (using the `.serialize()` method).
    */
    'toTabular': () => Promise<string>;
  }
  interface OmegaGraphInfos {}
  interface OmegaImport {}
  interface OmegaMitabCard {
    /**
    * Actual link data.
    */
    'data': D3Link;
    /**
    * Close the modal.
    */
    'hide': () => Promise<void>;
    /**
    * Makes the card in preload mode.
    */
    'preload': () => Promise<void>;
    /**
    * Show the modal.
    */
    'show': () => Promise<void>;
  }
  interface OmegaOnto {
    /**
    * Get the actual loaded data in the tree instance.
    */
    'getData': () => Promise<TreeLike[]>;
    /**
    * Get the number of selected nodes.
    */
    'selectedNumber': (bottom_only?: boolean) => Promise<number>;
    /**
    * Register new data inside the tree, via a API response (SubNode).
    */
    'setData': (d: SubNode) => Promise<void>;
    /**
    * Unset currently loaded data.
    */
    'unsetData': () => Promise<void>;
  }
  interface OmegaPrune {}
  interface OmegaReheat {}
  interface OmegaReset {}
  interface OmegaSearch {}
  interface OmegaTabs {
    /**
    * Focus a specific tab.
    * @param tab Tab name
    */
    'goToTab': (tab: string) => Promise<void>;
  }
  interface OmegaTaxo {
    /**
    * Get the actual loaded data in the tree instance.
    */
    'getData': () => Promise<TreeLike[]>;
    /**
    * Get the number of selected nodes.
    */
    'selectedNumber': (bottom?: boolean) => Promise<number>;
    /**
    * Register new data inside the tree, via a API response (SubNode).
    */
    'setData': (d: SubNode) => Promise<void>;
    /**
    * Unset currently loaded data.
    */
    'unsetData': () => Promise<void>;
  }
  interface OmegaTrim {
    /**
    * Currently stored coverage (in stringified percentage)
    */
    'coverage': string;
    /**
    * Currently stored e-value (in stringified positive power of 10)
    */
    'e_value': string;
    /**
    * Minimal values for inputs.
    */
    'fix_at'?: {
      identity?: string,
      coverage?: string,
      similarity?: string,
      e_value?: string
    };
    /**
    * Currently stored identity (in stringified percentage)
    */
    'identity': string;
    /**
    * Currently stored similarity (in stringified percentage)
    */
    'similarity': string;
  }
  interface OmegaUniprotCard {
    /**
    * Save the current node (unwrapped, when loaded).
    */
    'data': UniprotProtein;
    /**
    * True if an error has been detected.
    */
    'error_mode': boolean;
    /**
    * Close the modal.
    */
    'hide': () => Promise<void>;
    /**
    * Makes the card in preload mode.
    */
    'preload': () => Promise<void>;
    /**
    * Show the modal.
    */
    'show': () => Promise<void>;
  }
}

declare global {


  interface HTMLOmegaArtefactElement extends Components.OmegaArtefact, HTMLStencilElement {}
  var HTMLOmegaArtefactElement: {
    prototype: HTMLOmegaArtefactElement;
    new (): HTMLOmegaArtefactElement;
  };

  interface HTMLOmegaDownloadElement extends Components.OmegaDownload, HTMLStencilElement {}
  var HTMLOmegaDownloadElement: {
    prototype: HTMLOmegaDownloadElement;
    new (): HTMLOmegaDownloadElement;
  };

  interface HTMLOmegaGraphElement extends Components.OmegaGraph, HTMLStencilElement {}
  var HTMLOmegaGraphElement: {
    prototype: HTMLOmegaGraphElement;
    new (): HTMLOmegaGraphElement;
  };

  interface HTMLOmegaGraphInfosElement extends Components.OmegaGraphInfos, HTMLStencilElement {}
  var HTMLOmegaGraphInfosElement: {
    prototype: HTMLOmegaGraphInfosElement;
    new (): HTMLOmegaGraphInfosElement;
  };

  interface HTMLOmegaImportElement extends Components.OmegaImport, HTMLStencilElement {}
  var HTMLOmegaImportElement: {
    prototype: HTMLOmegaImportElement;
    new (): HTMLOmegaImportElement;
  };

  interface HTMLOmegaMitabCardElement extends Components.OmegaMitabCard, HTMLStencilElement {}
  var HTMLOmegaMitabCardElement: {
    prototype: HTMLOmegaMitabCardElement;
    new (): HTMLOmegaMitabCardElement;
  };

  interface HTMLOmegaOntoElement extends Components.OmegaOnto, HTMLStencilElement {}
  var HTMLOmegaOntoElement: {
    prototype: HTMLOmegaOntoElement;
    new (): HTMLOmegaOntoElement;
  };

  interface HTMLOmegaPruneElement extends Components.OmegaPrune, HTMLStencilElement {}
  var HTMLOmegaPruneElement: {
    prototype: HTMLOmegaPruneElement;
    new (): HTMLOmegaPruneElement;
  };

  interface HTMLOmegaReheatElement extends Components.OmegaReheat, HTMLStencilElement {}
  var HTMLOmegaReheatElement: {
    prototype: HTMLOmegaReheatElement;
    new (): HTMLOmegaReheatElement;
  };

  interface HTMLOmegaResetElement extends Components.OmegaReset, HTMLStencilElement {}
  var HTMLOmegaResetElement: {
    prototype: HTMLOmegaResetElement;
    new (): HTMLOmegaResetElement;
  };

  interface HTMLOmegaSearchElement extends Components.OmegaSearch, HTMLStencilElement {}
  var HTMLOmegaSearchElement: {
    prototype: HTMLOmegaSearchElement;
    new (): HTMLOmegaSearchElement;
  };

  interface HTMLOmegaTabsElement extends Components.OmegaTabs, HTMLStencilElement {}
  var HTMLOmegaTabsElement: {
    prototype: HTMLOmegaTabsElement;
    new (): HTMLOmegaTabsElement;
  };

  interface HTMLOmegaTaxoElement extends Components.OmegaTaxo, HTMLStencilElement {}
  var HTMLOmegaTaxoElement: {
    prototype: HTMLOmegaTaxoElement;
    new (): HTMLOmegaTaxoElement;
  };

  interface HTMLOmegaTrimElement extends Components.OmegaTrim, HTMLStencilElement {}
  var HTMLOmegaTrimElement: {
    prototype: HTMLOmegaTrimElement;
    new (): HTMLOmegaTrimElement;
  };

  interface HTMLOmegaUniprotCardElement extends Components.OmegaUniprotCard, HTMLStencilElement {}
  var HTMLOmegaUniprotCardElement: {
    prototype: HTMLOmegaUniprotCardElement;
    new (): HTMLOmegaUniprotCardElement;
  };
  interface HTMLElementTagNameMap {
    'omega-artefact': HTMLOmegaArtefactElement;
    'omega-download': HTMLOmegaDownloadElement;
    'omega-graph': HTMLOmegaGraphElement;
    'omega-graph-infos': HTMLOmegaGraphInfosElement;
    'omega-import': HTMLOmegaImportElement;
    'omega-mitab-card': HTMLOmegaMitabCardElement;
    'omega-onto': HTMLOmegaOntoElement;
    'omega-prune': HTMLOmegaPruneElement;
    'omega-reheat': HTMLOmegaReheatElement;
    'omega-reset': HTMLOmegaResetElement;
    'omega-search': HTMLOmegaSearchElement;
    'omega-tabs': HTMLOmegaTabsElement;
    'omega-taxo': HTMLOmegaTaxoElement;
    'omega-trim': HTMLOmegaTrimElement;
    'omega-uniprot-card': HTMLOmegaUniprotCardElement;
  }
}

declare namespace LocalJSX {
  interface OmegaArtefact extends JSXBase.HTMLAttributes<HTMLOmegaArtefactElement> {
    /**
    * Fires when omega-artefact needs to reset the graph after links importation.
    */
    'onOmega-artefact.reset'?: (event: CustomEvent<void>) => void;
  }
  interface OmegaDownload extends JSXBase.HTMLAttributes<HTMLOmegaDownloadElement> {
    /**
    * Fires when user ask a download as image.
    */
    'onOmega-download.download'?: (event: CustomEvent<string>) => void;
    /**
    * Fires when user ask a download as tabular file.
    */
    'onOmega-download.download-as-file'?: (event: CustomEvent<string>) => void;
    /**
    * Fires when user ask a download as JSON.
    */
    'onOmega-download.download-as-json'?: (event: CustomEvent<string>) => void;
  }
  interface OmegaGraph extends JSXBase.HTMLAttributes<HTMLOmegaGraphElement> {
    /**
    * Fires when the graph is reset
    */
    'onOmega-graph.complete-reset'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when the graph has a node number or a link number update
    */
    'onOmega-graph.data-update'?: (event: CustomEvent<{nodeNumber: number, linkNumber: number}>) => void;
    /**
    * Fires when a link is clicked, and a information card needs to be loaded
    */
    'onOmega-graph.load-link'?: (event: CustomEvent<D3Link>) => void;
    /**
    * Fires when a node is clicked, and a information card needs to be loaded
    */
    'onOmega-graph.load-protein'?: (event: CustomEvent<Promise<UniprotProtein>>) => void;
    /**
    * Fires when a node is selected
    */
    'onOmega-graph.prune-add'?: (event: CustomEvent<PruneAddProperty>) => void;
    /**
    * Fires when a prune is asked
    */
    'onOmega-graph.prune-make'?: (event: CustomEvent<string[]>) => void;
    /**
    * Fires when a node is unselected
    */
    'onOmega-graph.prune-remove'?: (event: CustomEvent<PruneDeleteProperty>) => void;
    /**
    * Fires when button "unselect all" is clicked
    */
    'onOmega-graph.prune-reset'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when the graph is refreshed
    */
    'onOmega-graph.rebuild'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when ontology tree needs to be refreshed. Data: MI IDs
    */
    'onOmega-graph.rebuild-onto'?: (event: CustomEvent<string[]>) => void;
    /**
    * Fires when taxonomy tree needs to be refreshed. Data: taxonomic IDs
    */
    'onOmega-graph.rebuild-taxo'?: (event: CustomEvent<string[]>) => void;
    /**
    * Specie representated by the graph
    */
    'specie'?: string;
  }
  interface OmegaGraphInfos extends JSXBase.HTMLAttributes<HTMLOmegaGraphInfosElement> {}
  interface OmegaImport extends JSXBase.HTMLAttributes<HTMLOmegaImportElement> {
    /**
    * Fires when a file import started. (order a reset)
    */
    'onOmega-import.import'?: (event: CustomEvent<void>) => void;
  }
  interface OmegaMitabCard extends JSXBase.HTMLAttributes<HTMLOmegaMitabCardElement> {
    /**
    * Actual link data.
    */
    'data'?: D3Link;
    /**
    * Fires when link becomes not hovered in the history
    */
    'onOmega-mitab-card.hover-off'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when link is hovered in the history
    */
    'onOmega-mitab-card.hover-on'?: (event: CustomEvent<D3Link>) => void;
  }
  interface OmegaOnto extends JSXBase.HTMLAttributes<HTMLOmegaOntoElement> {
    /**
    * Fires when a trim by ontology terms is asked.
    */
    'onOmega-onto.trim'?: (event: CustomEvent<string[]>) => void;
  }
  interface OmegaPrune extends JSXBase.HTMLAttributes<HTMLOmegaPruneElement> {
    /**
    * Fires when user end selection mode.
    */
    'onOmega-prune.end-selection'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when user start selection mode.
    */
    'onOmega-prune.selection'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when user ask a global unselect of all nodes.
    */
    'onOmega-prune.unselect-all'?: (event: CustomEvent<void>) => void;
  }
  interface OmegaReheat extends JSXBase.HTMLAttributes<HTMLOmegaReheatElement> {
    /**
    * Fires when use decides to start a reheat.
    */
    'onOmega-reheat.reheat'?: (event: CustomEvent<void>) => void;
  }
  interface OmegaReset extends JSXBase.HTMLAttributes<HTMLOmegaResetElement> {
    /**
    * Fires when user ask for a graph reset.
    */
    'onOmega-reset.reset'?: (event: CustomEvent<void>) => void;
  }
  interface OmegaSearch extends JSXBase.HTMLAttributes<HTMLOmegaSearchElement> {
    /**
    * Fires when the user select nodes to highlight (TODO)
    */
    'onOmega-search.search'?: (event: CustomEvent<string[]>) => void;
  }
  interface OmegaTabs extends JSXBase.HTMLAttributes<HTMLOmegaTabsElement> {}
  interface OmegaTaxo extends JSXBase.HTMLAttributes<HTMLOmegaTaxoElement> {
    /**
    * Fires when a trim by taxonomy IDs is asked.
    */
    'onOmega-taxo.trim'?: (event: CustomEvent<string[]>) => void;
  }
  interface OmegaTrim extends JSXBase.HTMLAttributes<HTMLOmegaTrimElement> {
    /**
    * Currently stored coverage (in stringified percentage)
    */
    'coverage'?: string;
    /**
    * Currently stored e-value (in stringified positive power of 10)
    */
    'e_value'?: string;
    /**
    * Minimal values for inputs.
    */
    'fix_at'?: {
      identity?: string,
      coverage?: string,
      similarity?: string,
      e_value?: string
    };
    /**
    * Currently stored identity (in stringified percentage)
    */
    'identity'?: string;
    /**
    * Fires when a input value changes.
    */
    'onOmega-trim.property-change'?: (event: CustomEvent<TrimProperties>) => void;
    /**
    * Currently stored similarity (in stringified percentage)
    */
    'similarity'?: string;
  }
  interface OmegaUniprotCard extends JSXBase.HTMLAttributes<HTMLOmegaUniprotCardElement> {
    /**
    * Save the current node (unwrapped, when loaded).
    */
    'data'?: UniprotProtein;
    /**
    * True if an error has been detected.
    */
    'error_mode'?: boolean;
    /**
    * Fires when node is unhovered in the history
    */
    'onOmega-uniprot-card.hover-off'?: (event: CustomEvent<void>) => void;
    /**
    * Fires when node is hovered in the history
    */
    'onOmega-uniprot-card.hover-on'?: (event: CustomEvent<string>) => void;
  }

  interface IntrinsicElements {
    'omega-artefact': OmegaArtefact;
    'omega-download': OmegaDownload;
    'omega-graph': OmegaGraph;
    'omega-graph-infos': OmegaGraphInfos;
    'omega-import': OmegaImport;
    'omega-mitab-card': OmegaMitabCard;
    'omega-onto': OmegaOnto;
    'omega-prune': OmegaPrune;
    'omega-reheat': OmegaReheat;
    'omega-reset': OmegaReset;
    'omega-search': OmegaSearch;
    'omega-tabs': OmegaTabs;
    'omega-taxo': OmegaTaxo;
    'omega-trim': OmegaTrim;
    'omega-uniprot-card': OmegaUniprotCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


