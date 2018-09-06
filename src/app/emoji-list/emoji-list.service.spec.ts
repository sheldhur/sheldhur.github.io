import { TestBed, inject } from '@angular/core/testing';

import { EmojiListService } from './emoji-list.service';

describe('EmojiListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmojiListService]
    });
  });

  it('should be created', inject([EmojiListService], (service: EmojiListService) => {
    expect(service).toBeTruthy();
  }));
});
