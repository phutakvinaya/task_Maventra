import { TestBed } from '@angular/core/testing';

import { GetdetailsService } from './getdetails.service';

describe('GetdetailsService', () => {
  let service: GetdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
