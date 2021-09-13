import {Component, Input, OnInit} from '@angular/core';
import {UserlistInterface} from "../../interfaces/userlist.interface";

@Component({
  selector: 'vlt-single-user',
  templateUrl: './vlt-single-user.component.html',
  styleUrls: ['./vlt-single-user.component.scss'],
})
export class VltSingleUserComponent implements OnInit {

  @Input() user!: UserlistInterface;

  showAdditionalInformation: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Toggles additional description box visibility.
   */
  toggleAdditionalInformationBar(): void {
    this.showAdditionalInformation = !this.showAdditionalInformation;
  }
}
