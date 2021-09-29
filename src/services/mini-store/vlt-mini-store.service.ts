import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserlistInterface} from "../../interfaces/userlist.interface";
import {mockUsers} from "../../mocks/mock-data";
import {DOCUMENT} from "@angular/common";

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
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2,
              @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
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
      this.renderer.addClass(this.document.body, this.vltMiniStoreConstants.CLASS_HELPER_DISABLE_SCROLL);
    } else {
      this.renderer.removeClass(this.document.body, this.vltMiniStoreConstants.CLASS_HELPER_DISABLE_SCROLL);
    }
  }
}
