import { TestBed } from '@angular/core/testing';

import { VocabularyApiService } from './vocabulary-api.service';

describe('VocabularyApiService', () => {
  let service: VocabularyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabularyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
