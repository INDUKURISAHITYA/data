import { TestBed } from '@angular/core/testing';

import { ReactformService } from './reactform.service';

describe('ReactformService', () => {
  let service: ReactformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
