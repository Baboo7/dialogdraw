import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {

  input = 'nouveau titre';

  constructor(
    private dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.input = data.input;
  }

  save(): void {
    this.dialogRef.close({ title: this.input });
  }

  cancel(): void {
    this.dialogRef.close({ title: null });
  }

  onNoClick(): void {
    this.dialogRef.close({ title: null });
  }
}
