import { TestBed } from '@angular/core/testing';

import { ServicecommuneService } from './servicecommune.service';

describe('ServicecommuneService', () => {
  let service: ServicecommuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecommuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
