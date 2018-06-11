import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { BlogComponent } from './containers/blog/blog.component';
import { PostComponent } from './containers/post/post.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: BlogComponent },
  { path: ':id', component: PostComponent }
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
