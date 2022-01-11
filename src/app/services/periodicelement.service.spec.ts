import { TestBed } from '@angular/core/testing';

import { PeriodicElementService } from './periodicElement.service';

describe('PeriodicelementService', () => {
  let service: PeriodicElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
