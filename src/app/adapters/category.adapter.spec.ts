import { TestBed } from '@angular/core/testing';

import { CategoryAdapter } from './category.adapter';

describe('CategoryAdapter', () => {
  let service: CategoryAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
