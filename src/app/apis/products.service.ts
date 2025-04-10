import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { Img } from '../models/img.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<Img[]> {
  constructor(
    http: HttpClient
  ) {
    super(http, "products")
  }
}
