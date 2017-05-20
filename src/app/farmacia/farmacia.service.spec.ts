import { TestBed, inject } from '@angular/core/testing';

import { FarmaciaService } from './farmacia.service';

describe('FarmaciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmaciaService]
    });
  });

  it('should ...', inject([FarmaciaService], (service: FarmaciaService) => {
    expect(service).toBeTruthy();
  }));
});
