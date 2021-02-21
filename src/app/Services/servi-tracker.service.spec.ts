import { TestBed } from '@angular/core/testing';

import { ServiTrackerService } from './servi-tracker.service';

describe('ServiTrackerService', () => {
  let service: ServiTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
