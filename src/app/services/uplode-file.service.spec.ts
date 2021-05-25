import { TestBed } from '@angular/core/testing';

import { UplodeFileService } from './uplode-file.service';

describe('UplodeFileService', () => {
  let service: UplodeFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UplodeFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
