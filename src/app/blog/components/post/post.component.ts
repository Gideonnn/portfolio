import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent { }
