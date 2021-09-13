import {Component, HostListener} from '@angular/core';
import {VltMiniStoreService} from "../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private vltMiniStoreService: VltMiniStoreService) {
  }

  /**
   * User may open the app on small screen and activate the menu,
   * however if the viewport becomes bigger, we need to
   * disable overlays and other responsive elements.
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.vltMiniStoreService.toggleNavigationVisibility(false);
  }
}
