import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDialogComponent } from './input-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const MockMatDialogRef = {
  close() { }
};

describe('InputDialogComponent', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;
  let spyOnMatDialogRefClose;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [InputDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: MockMatDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOnMatDialogRefClose = spyOn(TestBed.get(MatDialogRef), 'close').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on close', () => {
    component.cancel();
    expect(spyOnMatDialogRefClose).toHaveBeenCalled();
  });

  it('should close dialog on no click', () => {
    component.onNoClick();
    expect(spyOnMatDialogRefClose).toHaveBeenCalled();
  });
});
