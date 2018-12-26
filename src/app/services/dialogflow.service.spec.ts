import { TestBed } from '@angular/core/testing';

import { DialogflowService } from './dialogflow.service';
import { HttpClient } from '@angular/common/http';

const MockHttpClient = {};

describe('DialogflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: MockHttpClient },
    ],
  }));

  it('should be created', () => {
    const service: DialogflowService = TestBed.get(DialogflowService);
    expect(service).toBeTruthy();
  });
});
