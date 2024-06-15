import { TestBed } from '@angular/core/testing';

import { MangaDetailService } from './manga-detail.service';

describe('MangaDetailService', () => {
  let service: MangaDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
