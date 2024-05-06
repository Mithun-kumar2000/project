import { TestBed } from '@angular/core/testing';

import { PrflServiceService } from './prfl-service.service';

describe('PrflServiceService', () => {
  let service: PrflServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrflServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
