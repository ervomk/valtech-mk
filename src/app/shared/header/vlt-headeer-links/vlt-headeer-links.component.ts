import {Component, OnInit} from '@angular/core';
import {VltMiniStoreService} from "../../../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'app-vlt-headeer-links',
  templateUrl: './vlt-headeer-links.component.html',
  styleUrls: ['./vlt-headeer-links.component.scss']
})
export class VltHeadeerLinksComponent implements OnInit {

  constructor(private vltMiniStoreService: VltMiniStoreService,
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * Scrolls to the section.
   * There is polyfill as well for Safari.
   * @param item
   * @param event
   */
  scrollToSection(item: number, event: any): void {
    event.preventDefault();

    scroll({
      top: (document.querySelector(`#section${item}`) as any).offsetTop,
      behavior: "smooth"
    });

    // On mobile, when user clicks on a link, it hides the navigation as well.
    this.vltMiniStoreService.toggleNavigationVisibility(false);
  }
}
