import {Component, OnInit} from '@angular/core';
import {VltMiniStoreService} from "../../services/mini-store/vlt-mini-store.service";

@Component({
  selector: 'vlt-user-searchbox',
  templateUrl: './vlt-user-searchbox.component.html',
  styleUrls: ['./vlt-user-searchbox.component.scss']
})
export class VltUserSearchboxComponent implements OnInit {

  currentSearchInput: string = '';

  constructor(public vltMiniStoreService: VltMiniStoreService) {
  }

  ngOnInit(): void {
  }

  /**
   * Updates store with new search value.
   */
  updateSearchInput(): void {
    this.vltMiniStoreService.updateUserStringSearchValue(this.currentSearchInput);
  }

  /**
   * Updates store with desired key for sorting.
   * @param key
   */
  toggleUserSorting(key: string): void {
    // If it's already set, we reset it.
    if (this.vltMiniStoreService.userSortByKey$.getValue()) {
      this.vltMiniStoreService.updateUserSortByKey('');
      return;
    }

    this.vltMiniStoreService.updateUserSortByKey(key);
  }
}
