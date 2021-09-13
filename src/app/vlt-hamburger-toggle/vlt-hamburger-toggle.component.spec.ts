import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltHamburgerToggleComponent } from './vlt-hamburger-toggle.component';

describe('VltHamburgerToggleComponent', () => {
  let component: VltHamburgerToggleComponent;
  let fixture: ComponentFixture<VltHamburgerToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltHamburgerToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltHamburgerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
