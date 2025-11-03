import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './section/about/about.component';
import { JobComponent } from './section/job/job.component';
import { ContactComponent } from './section/contact/contact.component';
import {FeaturesComponent} from './section/features/features.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'job', component: JobComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
