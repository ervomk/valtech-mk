import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltFooterComponent } from './vlt-footer.component';

describe('VltFooterComponent', () => {
  let component: VltFooterComponent;
  let fixture: ComponentFixture<VltFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
