import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltSingleTeaserComponent } from './vlt-single-teaser.component';

describe('VltSingleTeaserComponent', () => {
  let component: VltSingleTeaserComponent;
  let fixture: ComponentFixture<VltSingleTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltSingleTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltSingleTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
