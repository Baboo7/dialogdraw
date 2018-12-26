import * as shape from 'd3-shape';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

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
  view: any[];
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
    private dialog: MatDialog,
    @Inject('Window') window: Window,
  ) {
    const { innerWidth, innerHeight } = window;
    this.view = [innerWidth, innerHeight];
  }

  async ngOnInit(): Promise<void> {
    this.intents = await this.dialogflowService.fetchIntents();
    const { nodes, links } = this.graphService.getGraphFromIntents(this.intents);
    this.nodes = nodes;
    this.links = links;
  }

  renameIntent(node: Node): void {
    this.dialog
      .open(ConfirmationDialogComponent, { width: '500px' })
      .afterClosed().subscribe((data) => { console.log(data); });
  }
}
