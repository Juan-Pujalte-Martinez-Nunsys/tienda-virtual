import { TestBed } from '@angular/core/testing';

import { ImageAdapter } from './image.service';

describe('ImageAdapter', () => {
  let service: ImageAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
