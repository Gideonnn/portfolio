import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: ResumeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class ResumeRoutingModule { }
