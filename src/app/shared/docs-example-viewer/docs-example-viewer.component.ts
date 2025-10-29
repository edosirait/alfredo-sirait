import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostBinding
} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'docs-example-viewer',
  templateUrl: './docs-example-viewer.component.html',
  styleUrls: ['./docs-example-viewer.component.scss']
})
export class DocsExampleViewerComponent implements AfterViewInit, OnChanges {
  @Input() fileName!: string;
  @Input() language: string = 'typescript';
  @Input() code: string = '';

  isVisible = true;
  copySuccess = false;
  safePreviewHtml?: SafeHtml;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.highlight();
    this.updatePreview();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code']) {
      this.highlight();
      this.updatePreview();
    }
  }

  private highlight(): void {
    setTimeout(() => Prism.highlightAllUnder(this.el.nativeElement), 20);
  }

  private updatePreview(): void {
    if (this.language === 'html') {
      this.safePreviewHtml = this.sanitizer.bypassSecurityTrustHtml(this.code);
    } else {
      this.safePreviewHtml = undefined;
    }
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copySuccess = true;
      setTimeout(() => (this.copySuccess = false), 1500);
    });
  }

  openPreview(): void {
    if (this.language !== 'html') return;

    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html lang="">
          <head>
            <title>${this.fileName} - Preview</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body { background: #f9fafb; padding: 2rem; font-family: Inter, sans-serif; }
            </style>
          </head>
          <body>
            ${this.code}
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  }
}
