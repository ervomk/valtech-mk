import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltSingleUserComponent } from './vlt-single-user.component';

describe('VltSingleUserComponent', () => {
  let component: VltSingleUserComponent;
  let fixture: ComponentFixture<VltSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltSingleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
