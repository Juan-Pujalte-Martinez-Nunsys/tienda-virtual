import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { Img } from './img.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<Img[]> {
  constructor(
    http: HttpClient
  ) {
    super(http, "categories")
  }
}
