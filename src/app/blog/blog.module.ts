import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
    ListComponent,
    PostComponent,
  ],
})
export class BlogModule { }
