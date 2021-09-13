import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltSingleSectionComponent } from './vlt-single-section.component';

describe('VltSingleSectionComponent', () => {
  let component: VltSingleSectionComponent;
  let fixture: ComponentFixture<VltSingleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltSingleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltSingleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
