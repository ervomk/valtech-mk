import {Component, OnInit} from '@angular/core';
import {VltMiniStoreService} from "../../../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'app-vlt-header',
  templateUrl: './vlt-header.component.html',
  styleUrls: ['./vlt-header.component.scss']
})
export class VltHeaderComponent implements OnInit {

  constructor(public vltMiniStoreService: VltMiniStoreService) {
  }

  ngOnInit(): void {
  }

}
