import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vlt-single-section',
  templateUrl: './vlt-single-section.component.html',
  styleUrls: ['./vlt-single-section.component.scss']
})
export class VltSingleSectionComponent implements OnInit {

  @Input() imagePath?: string;
  @Input() title?: string;
  @Input() titleColor?: string;
  @Input() solidColor?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
