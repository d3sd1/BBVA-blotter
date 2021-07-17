import { TestBed } from '@angular/core/testing';

import { BlotterMockService } from './blotter-mock.service';

describe('BlotterMockService', () => {
  let service: BlotterMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlotterMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
