import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { BlogComponent } from './containers/blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { PostComponent } from './containers/post/post.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
    PostComponent,
  ],
})
export class BlogModule { }
