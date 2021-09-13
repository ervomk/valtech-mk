import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputTypeEnum} from "../../enums/input-type.enum";

@Component({
  selector: 'vlt-contact-form',
  templateUrl: './vlt-contact-form.component.html',
  styleUrls: ['./vlt-contact-form.component.scss']
})
export class VltContactFormComponent implements OnInit {

  contactForm?: FormGroup;
  inputTypeEnum = InputTypeEnum;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // Sample reactive form.
    this.contactForm = this.fb.group({
      firstName: ['ervo'],
      lastName: [''],
      email: ['', Validators.email],
      phone: ['3'],
      description: [''],
    });
  }

  /**
   * Submit form callback.
   */
  submitForm(): void {
    console.log('Payload: ', this.contactForm?.getRawValue());
  }
}
