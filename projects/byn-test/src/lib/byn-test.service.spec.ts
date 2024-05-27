import { TestBed } from '@angular/core/testing';

import { BynTestService } from './byn-test.service';

describe('BynTestService', () => {
  let service: BynTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BynTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
