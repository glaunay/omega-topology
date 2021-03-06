import { HoParameterSet } from "omega-topology-fullstack";
import { Mesh } from "three";

export interface JSGraph {
    options: { directed: boolean, multigraph: boolean, compound: boolean };
    nodes: {
        v: string;
        value: {
            group: number;
            val: number;
        }
    }[];
    edges: {
        v: string;
        w: string;
        value: HoParameterSet
    }[];
}

export interface D3GraphBase { 
    nodes: D3Node[];
    links: D3Link[]; 
}

export interface D3Node {
    id: string;
    group: number;
    value: number;
    color: string;
    index: number;
    vx: number;
    vy: number;
    vz: number;
    x: number;
    y: number;
    z: number;
    __threeObj: Mesh;
}

export interface D3Link {
    index: number;
    misc: HoParameterSet;
    source: D3Node;
    target: D3Node;
    value: string;
    __lineObj: any;
}

export type MakeGraphEvent = CustomEvent<{ graph_base: D3GraphBase }>;
export type TrimProperties = { identity: number, e_value: number, similarity: number, coverage: number };
export type PruneProperties = string[];
export type PruneAddProperty = string | string[];
export type PruneDeleteProperty = string;
