import { TestBed } from '@angular/core/testing';

import { ConsoApiService } from './conso-api.service';

describe('ConsoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsoApiService = TestBed.get(ConsoApiService);
    expect(service).toBeTruthy();
  });
});
