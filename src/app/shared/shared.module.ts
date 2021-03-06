import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope);
library.add(faFacebook);
library.add(faGithub);
library.add(faTwitter);

// Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialIconsComponent } from './components/social-links/social-links.component';

const components = [
  NavigationComponent,
  SocialIconsComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ...components,
  ],
})
export class SharedModule { }
