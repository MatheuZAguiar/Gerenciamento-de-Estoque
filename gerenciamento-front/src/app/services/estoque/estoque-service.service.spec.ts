import { TestBed } from '@angular/core/testing';

import { EstoqueServiceService } from './estoque-service.service';

describe('EstoqueServiceService', () => {
  let service: EstoqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
