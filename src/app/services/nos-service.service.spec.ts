import { TestBed } from '@angular/core/testing';

import { NosServiceService } from './nos-service.service';

describe('NosServiceService', () => {
  let service: NosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
