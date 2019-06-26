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
  TrimProperties,
} from './utils/types';

export namespace Components {
  interface OmegaGraph {
    'getLinksOf': (id: string) => Promise<D3Link[]>;
    'getNode': (id: string) => Promise<D3Node>;
    'highlightLink': (source: string, target: string) => Promise<void>;
    'highlightNode': (...node_ids: string[]) => Promise<void>;
    'highlightNodeRegex': (matcher: RegExp) => Promise<void>;
    /**
    * Construction d'un graphe, en utilisant ForceGraph3D.  Capable de recevoir un *CustomEvent* doté une propriété *detail* contenant un objet, possédant une propriété *graph_base* de type `D3GraphBase` (type `MakeGraphEvent`).  Il est possible de directement passer un object implémentant `D3GraphBase` à cette fonction, qui construira le graphe en conséquence.
    */
    'make3dGraph': (data: CustomEvent<{ graph_base: D3GraphBase; }> | D3GraphBase) => Promise<void>;
    'removeHighlighting': (...node_ids: string[]) => Promise<void>;
    'removeHighlightingRegex': (matcher: RegExp) => Promise<void>;
    'removeNode': (...removed_nodes: (string | RegExp | D3Node)[]) => Promise<void>;
    'resetHighlighting': () => Promise<void>;
    /**
    * Espèce modélisée par le graphe
    */
    'specie': string;
  }
  interface OmegaTrim {}
}

declare global {


  interface HTMLOmegaGraphElement extends Components.OmegaGraph, HTMLStencilElement {}
  var HTMLOmegaGraphElement: {
    prototype: HTMLOmegaGraphElement;
    new (): HTMLOmegaGraphElement;
  };

  interface HTMLOmegaTrimElement extends Components.OmegaTrim, HTMLStencilElement {}
  var HTMLOmegaTrimElement: {
    prototype: HTMLOmegaTrimElement;
    new (): HTMLOmegaTrimElement;
  };
  interface HTMLElementTagNameMap {
    'omega-graph': HTMLOmegaGraphElement;
    'omega-trim': HTMLOmegaTrimElement;
  }
}

declare namespace LocalJSX {
  interface OmegaGraph extends JSXBase.HTMLAttributes<HTMLOmegaGraphElement> {
    /**
    * Espèce modélisée par le graphe
    */
    'specie'?: string;
  }
  interface OmegaTrim extends JSXBase.HTMLAttributes<HTMLOmegaTrimElement> {
    'onTrim-property-change'?: (event: CustomEvent<TrimProperties>) => void;
  }

  interface IntrinsicElements {
    'omega-graph': OmegaGraph;
    'omega-trim': OmegaTrim;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


