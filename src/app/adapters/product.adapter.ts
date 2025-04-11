import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Product } from '../models/product.model';
import { ImageAdapter } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapter implements Adapter<Product> {

  constructor(
    private imageAdapter: ImageAdapter
  ) { }

  adapt(item: any): Product {
    return new Product(
      item.id,
      item.categoryId,
      this.imageAdapter.adapt(item.image)
    );
  }
}
