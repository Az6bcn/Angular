import { TestBed, async, inject } from '@angular/core/testing';

import { DirtyTrackingGuardGuard } from './dirty-tracking-guard.guard';

describe('DirtyTrackingGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirtyTrackingGuardGuard]
    });
  });

  it('should ...', inject([DirtyTrackingGuardGuard], (guard: DirtyTrackingGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
