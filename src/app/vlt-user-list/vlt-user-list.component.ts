import {Component, OnInit} from '@angular/core';
import {VltMiniStoreService} from "../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'vlt-user-list',
  templateUrl: './vlt-user-list.component.html',
  styleUrls: ['./vlt-user-list.component.scss'],
})
export class VltUserListComponent implements OnInit {

  constructor(public vltMiniStoreService: VltMiniStoreService) { }

  ngOnInit(): void {
  }

}
