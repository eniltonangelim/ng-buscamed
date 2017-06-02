import { TestBed, inject } from '@angular/core/testing';

import { SearchItemService } from './search-item.service';

describe('SearchItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchItemService]
    });
  });

  it('should ...', inject([SearchItemService], (service: SearchItemService) => {
    expect(service).toBeTruthy();
  }));
});
