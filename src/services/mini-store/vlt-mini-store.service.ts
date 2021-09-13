import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserlistInterface} from "../../interfaces/userlist.interface";
import {mockUsers} from "../../mocks/mock-data";

@Injectable({
  providedIn: 'root'
})
export class VltMiniStoreService {

  userListMock$: BehaviorSubject<UserlistInterface[]> = new BehaviorSubject<UserlistInterface[]>(mockUsers);
  userStringSearch$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userSortByKey$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  navigationVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private vltMiniStoreConstants = {
    CLASS_HELPER_DISABLE_SCROLL: 'helper-disable-scroll'
  }

  constructor() {
  }

  /**
   * Updates user search input.
   * @param value
   */
  updateUserStringSearchValue(value: string): void {
    this.userStringSearch$.next(value);
  }

  /**
   * Updates sort key for users.
   * @param value
   */
  updateUserSortByKey(value: string): void {
    this.userSortByKey$.next(value);
  }

  /**
   * Toggles navigation visibility which is used for table/mobile devices.
   * @param forceValue
   */
  toggleNavigationVisibility(forceValue?: boolean): void {
    this.navigationVisible$.next(forceValue === undefined ? !this.navigationVisible$.getValue() : forceValue);

    if (this.navigationVisible$.getValue()) {
      document.body.classList.add(this.vltMiniStoreConstants.CLASS_HELPER_DISABLE_SCROLL);
    } else {
      document.body.classList.remove(this.vltMiniStoreConstants.CLASS_HELPER_DISABLE_SCROLL);
    }
  }
}
