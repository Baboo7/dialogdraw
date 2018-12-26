import { Intent } from './intent.interface';

export interface GraphInput {
  nodes: Node[];
  links: Link[];
}

export interface Node {
  id: string;
  label: string;
  intent: Intent;
}

export interface Link {
  source: string;
  target: string;
}
