import { TestBed, inject } from '@angular/core/testing';

import { ItemsFilterService } from './items-filter.service';

describe('ItemsFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsFilterService]
    });
  });

  it('should be created', inject([ItemsFilterService], (service: ItemsFilterService) => {
    expect(service).toBeTruthy();
  }));
});
