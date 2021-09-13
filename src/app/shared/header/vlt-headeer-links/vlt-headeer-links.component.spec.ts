import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VltHeadeerLinksComponent } from './vlt-headeer-links.component';

describe('VltHeadeerLinksComponent', () => {
  let component: VltHeadeerLinksComponent;
  let fixture: ComponentFixture<VltHeadeerLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VltHeadeerLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VltHeadeerLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
