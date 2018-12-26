export interface Intent {
  id: string;
  name: string;
  actions: string[];
  contextIn: string[];
  contextOut: Context[];
  event: IntentEvent[];
  fallbackIntent: boolean;
  parameters: Parameter[];
  priority: number;
}

interface Context {
  lifespan: number;
  name: string;
  parameters: object;
}

interface Parameter {
  id: string;
  name: string;
  value: string;
  isList: boolean;
  required: boolean;
  dataType?: string;
}

interface IntentEvent {
  name: string;
}
