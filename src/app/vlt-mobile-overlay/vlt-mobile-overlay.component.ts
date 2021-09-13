import { Component, OnInit } from '@angular/core';
import {VltMiniStoreService} from "../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'vlt-mobile-overlay',
  templateUrl: './vlt-mobile-overlay.component.html',
  styleUrls: ['./vlt-mobile-overlay.component.scss']
})
export class VltMobileOverlayComponent implements OnInit {

  constructor(public vltMiniStoreService: VltMiniStoreService) { }

  ngOnInit(): void {
  }

}
