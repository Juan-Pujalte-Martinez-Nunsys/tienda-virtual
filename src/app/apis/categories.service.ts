import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { HttpClient } from '@angular/common/http';
import { CategoryAdapter } from '../adapters/category.adapter';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<Category> {
  constructor(
    http: HttpClient,
    categoryAdapter: CategoryAdapter
  ) {
    super(http, categoryAdapter, "categories")
  }
}
