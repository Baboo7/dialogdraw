import { Injectable } from '@angular/core';
import { Intent } from '../types/intent.interface';
import { GraphInput, Node, Link } from '../types/graph.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  public getGraphFromIntents(intents: Intent[]): GraphInput {
    const nodes = this.generateNodes(intents);
    const links = this.generateLinks(intents);

    return { nodes, links };
  }

  private generateNodes(intents: Intent[]): Node[] {
    const nodes = intents.map(intent => {
      const { id, name } = intent;
      return {
        id,
        label: name,
        intent,
      };
    });

    return nodes;
  }

  private generateLinks(intents: Intent[]): Link[] {
    const contextParentIntentIds = intents.reduce((contexts, intent) => {
      intent.contextOut.forEach(context => {
        const { name, lifespan } = context;
        if (lifespan > 0) {
          contexts[name] = contexts[name] ? contexts[name] : [];
          contexts[name].push(intent.id);
        }
      });
      return contexts;
    }, Object.create(null));

    const links: Link[] = [];
    intents.forEach(intent => {
      intent.contextIn.forEach(context => {
        const parentIntentIds = contextParentIntentIds[context];
        if (parentIntentIds) {
          parentIntentIds.forEach(parentIntentId => {
            const link: Link = {
              source: parentIntentId,
              target: intent.id,
            };
            links.push(link);
          });
        }
      });
    });

    return links;
  }
}
