import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltUserSearchboxComponent } from './vlt-user-searchbox.component';

describe('VltUserSearchboxComponent', () => {
  let component: VltUserSearchboxComponent;
  let fixture: ComponentFixture<VltUserSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltUserSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltUserSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
