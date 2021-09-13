import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltTeasersComponent } from './vlt-teasers.component';

describe('VltTeasersComponent', () => {
  let component: VltTeasersComponent;
  let fixture: ComponentFixture<VltTeasersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltTeasersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltTeasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
