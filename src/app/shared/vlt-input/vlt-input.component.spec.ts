import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltInputComponent } from './vlt-input.component';

describe('VltInputComponent', () => {
  let component: VltInputComponent;
  let fixture: ComponentFixture<VltInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
