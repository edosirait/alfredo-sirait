import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobComponent } from './job/job.component';
import {ScrollAnimateDirective} from '../shared/directives/scroll-animate.directive';
import {DraggableDirective} from '../directives/draggable.directive';
import {DocsExampleViewerComponent} from '../shared/docs-example-viewer/docs-example-viewer.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    JobComponent,
    ScrollAnimateDirective,
    DraggableDirective,
    DocsExampleViewerComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'about', component: AboutComponent},
            {path: 'job', component: JobComponent},
            {path: 'contact', component: ContactComponent}
        ]),
        NgOptimizedImage
    ],
  exports: [
    AboutComponent,
    ContactComponent,
    JobComponent,
    ScrollAnimateDirective,
    DraggableDirective,
    DocsExampleViewerComponent
  ]
})
export class SectionModule {}
