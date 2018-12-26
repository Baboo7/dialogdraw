import * as shape from 'd3-shape';

import { Component, OnInit } from '@angular/core';
import { DialogflowService } from './services/dialogflow.service';
import { GraphService } from './services/graph.service';
import { Intent } from './types/intent.interface';
import { Node, Link } from './types/graph.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  curve: any = shape.curveBundle;
  view: any[] = [1920, 1080];
  autoZoom = false;
  panOnZoom = true;
  enableZoom = true;
  autoCenter = false;

  nodes: Node[] = [];
  links: Link[] = [];
  intents: Intent[] = [];

  constructor(
    private dialogflowService: DialogflowService,
    private graphService: GraphService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.intents = await this.dialogflowService.fetchIntents();
    const { nodes, links } = this.graphService.getGraphFromIntents(this.intents);
    this.nodes = nodes;
    this.links = links;
  }

  select(event): void {
    console.log(event);
  }
}
