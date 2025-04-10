import { TestBed } from '@angular/core/testing';

import { CoverAdapter } from './cover.adapter';

describe('CoverAdapter', () => {
  let service: CoverAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
