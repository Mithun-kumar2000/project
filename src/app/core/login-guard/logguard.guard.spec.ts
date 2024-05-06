import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logguardGuard } from './logguard.guard';

describe('logguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
