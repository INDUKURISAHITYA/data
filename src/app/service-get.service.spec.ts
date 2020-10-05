import { TestBed } from '@angular/core/testing';

import { ServiceGetService } from './service-get.service';

describe('ServiceGetService', () => {
  let service: ServiceGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
