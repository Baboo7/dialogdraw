import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogflowService } from './services/dialogflow.service';
import { GraphService } from './services/graph.service';
import { MaterialModule } from './material.module';

const MockDialogflowService = {};
const MockGraphService = {};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: 'Window', useValue: window },
        { provide: DialogflowService, useValue: MockDialogflowService },
        { provide: GraphService, useValue: MockGraphService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
