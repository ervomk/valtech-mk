import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltBtnComponent } from './vlt-btn.component';

describe('VltBtnGenericComponent', () => {
  let component: VltBtnComponent;
  let fixture: ComponentFixture<VltBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
