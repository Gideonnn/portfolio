import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope);
library.add(faFacebook);
library.add(faGithub);
library.add(faTwitter);

// Components
import { SocialIconsComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [
    SocialIconsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    SocialIconsComponent,
  ],
})
export class SharedModule { }
