import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltLogoComponent } from './vlt-logo.component';

describe('VltLogoComponent', () => {
  let component: VltLogoComponent;
  let fixture: ComponentFixture<VltLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
