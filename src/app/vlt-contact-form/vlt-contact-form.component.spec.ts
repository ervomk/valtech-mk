import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltContactFormComponent } from './vlt-contact-form.component';

describe('VltContactFormComponent', () => {
  let component: VltContactFormComponent;
  let fixture: ComponentFixture<VltContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
