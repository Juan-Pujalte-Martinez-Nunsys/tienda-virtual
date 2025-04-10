import { Injectable } from '@angular/core';
import { Img } from '../models/img.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './apiService';
import { CoverAdapter } from '../adapters/cover.adapter';

@Injectable({
  providedIn: 'root'
})
export class CoversService extends ApiService<Img> {
  constructor(
    http: HttpClient,
    coverAdapter: CoverAdapter
  ) {
    super(http, coverAdapter, "covers")
  }
}
