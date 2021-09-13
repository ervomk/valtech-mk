import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltBtnGenericComponent } from './vlt-btn-generic.component';

describe('VltBtnGenericComponent', () => {
  let component: VltBtnGenericComponent;
  let fixture: ComponentFixture<VltBtnGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltBtnGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltBtnGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
