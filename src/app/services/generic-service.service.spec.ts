import { TestBed, inject } from '@angular/core/testing';

import { GenericServiceService } from './generic-service.service';

describe('GenericServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericServiceService]
    });
  });

  it('should be created', inject([GenericServiceService], (service: GenericServiceService) => {
    expect(service).toBeTruthy();
  }));
});
