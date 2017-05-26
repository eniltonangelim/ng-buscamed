import { TestBed, inject } from '@angular/core/testing';

import { MedicamentoService } from './medicamento.service';

describe('MedicamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicamentoService]
    });
  });

  it('should ...', inject([MedicamentoService], (service: MedicamentoService) => {
    expect(service).toBeTruthy();
  }));
});
