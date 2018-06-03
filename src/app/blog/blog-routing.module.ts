import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: BlogComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class BlogRoutingModule { }
