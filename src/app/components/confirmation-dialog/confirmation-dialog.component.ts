import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  title = 'nouveau titre';

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  ) { }

  save(): void {
    this.dialogRef.close({ title: this.title });
  }

  cancel(): void {
    this.dialogRef.close({ title: null });
  }

  onNoClick(): void {
    this.dialogRef.close({ title: null });
  }
}
