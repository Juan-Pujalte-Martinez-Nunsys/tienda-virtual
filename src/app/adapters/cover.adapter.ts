import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Cover } from '../models/cover.model';
import { ImageAdapter } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class CoverAdapter implements Adapter<Cover> {

  constructor(
    private imageAdapter: ImageAdapter
  ) { }

  adapt(item: any): Cover {
    return new Cover(
      item.id,
      this.imageAdapter.adapt(item.image)
    );
  }
}
