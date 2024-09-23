import { TestBed } from '@angular/core/testing';

import { MovimentacaoServiceService } from './movimentacao-service.service';

describe('MovimentacaoServiceService', () => {
  let service: MovimentacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
