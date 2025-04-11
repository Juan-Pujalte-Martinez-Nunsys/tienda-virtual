import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { HttpClient } from '@angular/common/http';
import { ProductAdapter } from '../adapters/product.adapter';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<Product> {
  constructor(
    http: HttpClient,
    productAdapter: ProductAdapter
  ) {
    super(http, productAdapter, "products")
  }
}
