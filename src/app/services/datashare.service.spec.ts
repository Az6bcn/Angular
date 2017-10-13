import { TestBed, inject } from '@angular/core/testing';

import { DatashareService } from './datashare.service';

describe('DatashareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatashareService]
    });
  });

  it('should be created', inject([DatashareService], (service: DatashareService) => {
    expect(service).toBeTruthy();
  }));
});
