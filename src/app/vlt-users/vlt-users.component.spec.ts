import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltUsersComponent } from './vlt-users.component';

describe('VltUsersComponent', () => {
  let component: VltUsersComponent;
  let fixture: ComponentFixture<VltUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
