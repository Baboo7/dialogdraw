import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatDialogRef } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../material.module';

const MockMatDialogRef = {
  close() { }
};

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;
  let spyOnMatDialogRefClose;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ConfirmationDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: MockMatDialogRef },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOnMatDialogRefClose = spyOn(TestBed.get(MatDialogRef), 'close').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on close', () => {
    component.close({ confirm: false });
    expect(spyOnMatDialogRefClose).toHaveBeenCalled();
  });

  it('should close dialog on no click', () => {
    component.onNoClick();
    expect(spyOnMatDialogRefClose).toHaveBeenCalled();
  });
});
