import { TestBed } from '@angular/core/testing';

import { CoviderviceService } from './covidervice.service';

describe('CoviderviceService', () => {
  let service: CoviderviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoviderviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
