import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobComponent } from './job/job.component';
import {ScrollAnimateDirective} from '../shared/directives/scroll-animate.directive';
import {DraggableDirective} from '../directives/draggable.directive';
import {DocsExampleViewerComponent} from '../shared/docs-example-viewer/docs-example-viewer.component';
import { FeaturesComponent } from './features/features.component';
import {FormsModule} from '@angular/forms';
import {DynamicDialogComponent} from '../shared/dynamic-dialog/dynamic-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    JobComponent,
    ScrollAnimateDirective,
    DraggableDirective,
    DocsExampleViewerComponent,
    FeaturesComponent,
    DynamicDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'about', component: AboutComponent},
      {path: 'job', component: JobComponent},
      {path: 'features', component: FeaturesComponent},
      {path: 'contact', component: ContactComponent}
    ]),
    NgOptimizedImage,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    JobComponent,
    FeaturesComponent,
    ScrollAnimateDirective,
    DraggableDirective,
    DocsExampleViewerComponent,
    DynamicDialogComponent
  ]
})
export class SectionModule {}
