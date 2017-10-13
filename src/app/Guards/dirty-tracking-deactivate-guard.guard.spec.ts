import { TestBed, async, inject } from '@angular/core/testing';

import { DirtyTrackingDeactivateGuardGuard } from './dirty-tracking-deactivate-guard.guard';

describe('DirtyTrackingDeactivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirtyTrackingDeactivateGuardGuard]
    });
  });

  it('should ...', inject([DirtyTrackingDeactivateGuardGuard], (guard: DirtyTrackingDeactivateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
