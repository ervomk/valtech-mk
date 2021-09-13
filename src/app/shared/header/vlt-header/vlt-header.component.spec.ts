import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltHeaderComponent } from './vlt-header.component';

describe('VltHeaderComponent', () => {
  let component: VltHeaderComponent;
  let fixture: ComponentFixture<VltHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
