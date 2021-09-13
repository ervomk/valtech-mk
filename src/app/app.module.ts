import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VltHeaderComponent} from './shared/header/vlt-header/vlt-header.component';
import {VltLogoComponent} from './shared/vlt-logo/vlt-logo.component';
import {VltHeadeerLinksComponent} from './shared/header/vlt-headeer-links/vlt-headeer-links.component';
import {VltSingleSectionComponent} from './vlt-single-section/vlt-single-section.component';
import {VltContactUsAsButtonComponent} from './vlt-contact-us-as-button/vlt-contact-us-as-button.component';
import {VltContactBtnEmailComponent} from './shared/vlt-contact-btn-email/vlt-contact-btn-email.component';
import {VltUsersComponent} from './vlt-users/vlt-users.component';
import {VltUserListComponent} from './vlt-user-list/vlt-user-list.component';
import {VltSingleUserComponent} from './vlt-single-user/vlt-single-user.component';
import {SearchPipe} from '../pipes/search/search.pipe';
import {VltUserSearchboxComponent} from './vlt-user-searchbox/vlt-user-searchbox.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SortPipe} from "../pipes/sort/sort.pipe";
import {VltBtnComponent} from './shared/vlt-btn/vlt-btn.component';
import {VltTeasersComponent} from './vlt-teasers/vlt-teasers.component';
import {VltSingleTeaserComponent} from './vlt-single-teaser/vlt-single-teaser.component';
import {VltContactFormComponent} from './vlt-contact-form/vlt-contact-form.component';
import {VltInputComponent} from './shared/vlt-input/vlt-input.component';
import {VltSearchInputComponent} from "./vlt-search-input/vlt-search-input.component";
import {VltHamburgerToggleComponent} from './vlt-hamburger-toggle/vlt-hamburger-toggle.component';
import {VltMobileOverlayComponent} from './vlt-mobile-overlay/vlt-mobile-overlay.component';
import { VltFooterComponent } from './shared/vlt-footer/vlt-footer.component';
import { VltBoxParallaxDirective } from '../directives/box-parallax/vlt-box-parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    VltHeaderComponent,
    VltLogoComponent,
    VltHeadeerLinksComponent,
    VltSearchInputComponent,
    VltSingleSectionComponent,
    VltContactUsAsButtonComponent,
    VltContactBtnEmailComponent,
    VltUsersComponent,
    VltUserListComponent,
    VltSingleUserComponent,
    SearchPipe,
    VltUserSearchboxComponent,
    SortPipe,
    VltBtnComponent,
    VltTeasersComponent,
    VltSingleTeaserComponent,
    VltContactFormComponent,
    VltInputComponent,
    VltHamburgerToggleComponent,
    VltMobileOverlayComponent,
    VltFooterComponent,
    VltBoxParallaxDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
