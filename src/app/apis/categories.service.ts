import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { Img } from '../models/img.model';
import { HttpClient } from '@angular/common/http';
import { CategoryAdapter } from '../adapters/category.adapter';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<Img> {
  constructor(
    http: HttpClient,
    categoryAdapter: CategoryAdapter
  ) {
    super(http, categoryAdapter, "categories")
  }
}
