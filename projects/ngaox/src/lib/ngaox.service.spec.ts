import { TestBed } from '@angular/core/testing';

import { NgaoxService } from './ngaox.service';

describe('NgaoxService', () => {
  let service: NgaoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgaoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
