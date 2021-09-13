import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltMobileOverlayComponent } from './vlt-mobile-overlay.component';

describe('VltMobileOverlayComponent', () => {
  let component: VltMobileOverlayComponent;
  let fixture: ComponentFixture<VltMobileOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltMobileOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltMobileOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
