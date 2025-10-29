import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsExampleViewerComponent } from './docs-example-viewer.component';

describe('DocsExampleViewerComponent', () => {
  let component: DocsExampleViewerComponent;
  let fixture: ComponentFixture<DocsExampleViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsExampleViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
