import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vlt-single-teaser',
  templateUrl: './vlt-single-teaser.component.html',
  styleUrls: ['./vlt-single-teaser.component.scss']
})
export class VltSingleTeaserComponent implements OnInit {

  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
