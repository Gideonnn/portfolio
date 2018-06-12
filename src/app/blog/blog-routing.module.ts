import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { BlogComponent } from './blog.component';
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';

export const ROUTES: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'post/:id', component: PostComponent },
    ]
  }
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
