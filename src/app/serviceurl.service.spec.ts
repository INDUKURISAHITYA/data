import { TestBed } from '@angular/core/testing';

import { ServiceurlService } from './serviceurl.service';

describe('ServiceurlService', () => {
  let service: ServiceurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
