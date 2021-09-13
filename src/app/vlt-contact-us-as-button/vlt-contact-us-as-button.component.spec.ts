import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltContactUsAsButtonComponent } from './vlt-contact-us-as-button.component';

describe('VltContactUsAsButtonComponent', () => {
  let component: VltContactUsAsButtonComponent;
  let fixture: ComponentFixture<VltContactUsAsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltContactUsAsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltContactUsAsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
