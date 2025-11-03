import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialogComponent {
  userInput = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DynamicDialogComponent>
  ) {}

  onSubmit(): void {
    console.log('User Input:', this.userInput);
    this.dialogRef.close(this.userInput);
  }
}
