import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
  ],
})
export class BlogModule { }
