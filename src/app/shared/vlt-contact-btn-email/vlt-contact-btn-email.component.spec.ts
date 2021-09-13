import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltContactBtnEmailComponent } from './vlt-contact-btn-email.component';

describe('VltContactBtnEmailComponent', () => {
  let component: VltContactBtnEmailComponent;
  let fixture: ComponentFixture<VltContactBtnEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltContactBtnEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltContactBtnEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
