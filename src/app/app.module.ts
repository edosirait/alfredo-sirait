import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import module modularized
import { LayoutModule } from './core/layout/layout.module';
import { SectionModule } from './section/section.module';
import {NgOptimizedImage} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import { DocsExampleViewerComponent } from './shared/docs-example-viewer/docs-example-viewer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
    NgOptimizedImage,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
