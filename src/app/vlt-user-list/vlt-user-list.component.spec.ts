import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltUserListComponent } from './vlt-user-list.component';

describe('VltUserListComponent', () => {
  let component: VltUserListComponent;
  let fixture: ComponentFixture<VltUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
