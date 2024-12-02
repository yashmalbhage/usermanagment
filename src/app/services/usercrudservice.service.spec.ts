import { TestBed } from '@angular/core/testing';

import { UsercrudserviceService } from './usercrudservice.service';

describe('UsercrudserviceService', () => {
  let service: UsercrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
