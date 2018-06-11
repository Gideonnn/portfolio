import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { PostComponent } from './containers/post/post.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
    PostComponent,
  ],
})
export class BlogModule { }
