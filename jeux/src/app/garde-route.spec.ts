import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { randomGuard } from './garde-route.';

describe('randomGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => randomGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});