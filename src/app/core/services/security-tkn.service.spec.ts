import { TestBed, inject } from '@angular/core/testing';

import { SecurityTknService } from './security-tkn.service';

describe('SecurityTknService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityTknService]
    });
  });

  it('should be created', inject([SecurityTknService], (service: SecurityTknService) => {
    expect(service).toBeTruthy();
  }));
});
