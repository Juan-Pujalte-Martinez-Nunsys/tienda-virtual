import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Category } from '../models/category.model';
import { ImageAdapter } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdapter implements Adapter<Category> {

  constructor(
    private imageAdapter: ImageAdapter
  ) { }

  adapt(item: any): Category {
    return new Category(
      item.id,
      this.imageAdapter.adapt(item.image)
    );
  }
}
