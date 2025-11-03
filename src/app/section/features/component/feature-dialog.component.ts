import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-feature-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>Try typing something here:</p>
      <input matInput placeholder="Enter your message" [(ngModel)]="message"/>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="close()">Close</button>
      <button mat-raised-button color="primary" (click)="confirm()">Submit</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatInput,
    MatButton,
    FormsModule
  ],
  styles: [`
    mat-dialog-content {
      display: flex;
      flex-direction: column;
      gap: .75rem;
      padding: 1rem 0;
    }

    input {
      border: 1px solid #555;
      border-radius: 6px;
      padding: .5rem;
      background: #222;
      color: #fff;
    }
  `]
})
export class FeatureDialogComponent {
  message = '';

  constructor(
    private dialogRef: MatDialogRef<FeatureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(this.message);
  }
}
