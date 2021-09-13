import { TestBed } from '@angular/core/testing';

import { VltMiniStoreService } from './vlt-mini-store.service';

describe('VltMiniStoreService', () => {
  let service: VltMiniStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VltMiniStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
