import {Component, OnInit} from '@angular/core';
import {VltMiniStoreService} from "../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'vlt-hamburger-toggle',
  templateUrl: './vlt-hamburger-toggle.component.html',
  styleUrls: ['./vlt-hamburger-toggle.component.scss']
})
export class VltHamburgerToggleComponent implements OnInit {

  constructor(public vltMiniStoreService: VltMiniStoreService) {
  }

  ngOnInit(): void {
  }
}
