import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
