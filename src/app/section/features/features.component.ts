import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FeatureDialogComponent} from './component/feature-dialog.component';
import {DynamicDialogComponent} from '../../shared/dynamic-dialog/dynamic-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-8px)' })
        ),
      ]),
    ]),
  ],
})
export class FeaturesComponent {
  fields = signal<{ label: string; type: string; value: string }[]>([
    { label: 'Name', type: 'text', value: '' },
    { label: 'Email', type: 'email', value: '' }
  ]);

  availableItems = ['Apple', 'Banana', 'Cherry', 'Durian'];
  droppedItems: string[] = [];

  uploadedFiles: { name: string; url: string }[] = [];
  isDragging = false;

  // === Reaction Test (Mini Interaction Demo) ===
  reactionState: 'idle' | 'waiting' | 'ready' | 'clicked' = 'idle';
  reactionMessage = '';
  reactionTimes: number[] = [];
  isRunning = false;
  private startTime = 0;
  private timeoutId: any;

  constructor(private dialog: MatDialog) {}

  trackByIndex = (index: number) => index;

  addField(): void {
    this.fields.update(fields => [
      ...fields,
      { label: 'New Field', type: 'text', value: '' }
    ]);
  }

  removeField(index: number): void {
    this.fields.update(fields => fields.filter((_, i) => i !== index));
  }

  updateLabel(index: number, newLabel: string): void {
    const updated = [...this.fields()];
    updated[index] = { ...updated[index], label: newLabel };
    this.fields.set(updated);
  }

  updateType(index: number, newType: string): void {
    const updated = [...this.fields()];
    updated[index] = { ...updated[index], type: newType };
    this.fields.set(updated);
  }

  updateValue(index: number, newValue: string): void {
    const updated = [...this.fields()];
    updated[index] = { ...updated[index], value: newValue };
    this.fields.set(updated);
  }

  showPreview(): void {
    const json = JSON.stringify(this.fields(), null, 2);
    alert('Form JSON:\n' + json);
  }

  openDialog(): void {
    this.dialog.open(DynamicDialogComponent, {
      width: '420px',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      data: {
        title: 'Dynamic Dialog Example',
        message: 'Try typing something here:'
      }
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    // Same container → reorder
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Different container → add new item (allow duplicates)
      const draggedItem = event.item.data;
      this.droppedItems.push(draggedItem);
    }
  }

  removeDroppedItem(index: number): void {
    this.droppedItems.splice(index, 1);
  }

  previewDropped(): void {
    alert('Dropped values: ' + JSON.stringify(this.droppedItems));
  }

  /** Handle file input */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.handleFiles(input.files);
    input.value = ''; // reset input agar bisa upload file sama lagi
  }

  /** Drag events */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDropFiles(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  startReactionTest(): void {
    this.reactionMessage = '';
    this.reactionState = 'waiting';
    this.isRunning = true;

    // Random delay between 2–5 seconds
    const delay = Math.random() * 3000 + 2000;

    this.timeoutId = setTimeout(() => {
      this.reactionState = 'ready';
      this.startTime = performance.now();
    }, delay);
  }

  handleBoxClick(): void {
    if (this.reactionState === 'waiting') {
      this.reactionMessage = 'Too soon! 😅';
      this.reactionState = 'clicked';
      this.isRunning = false;
      clearTimeout(this.timeoutId);
    } else if (this.reactionState === 'ready') {
      const reactionTime = Math.round(performance.now() - this.startTime);
      this.reactionTimes.push(reactionTime);
      this.reactionMessage = `Your time: ${reactionTime} ms`;
      this.reactionState = 'clicked';
      this.isRunning = false;
    } else if (this.reactionState === 'clicked') {
      // ignore clicks after result
    }
  }

  getAverageReaction(): number {
    return Math.round(
      this.reactionTimes.reduce((a, b) => a + b, 0) / this.reactionTimes.length
    );
  }

  getBestReaction(): number {
    return Math.min(...this.reactionTimes);
  }

  /** Process files */
  private handleFiles(files: FileList): void {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedFiles.push({
          name: file.name,
          url: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    });
  }

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }
}
