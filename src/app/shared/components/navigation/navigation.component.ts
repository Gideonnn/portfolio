import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Models
import { NavMode } from '../../models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() topRight = false;
}
