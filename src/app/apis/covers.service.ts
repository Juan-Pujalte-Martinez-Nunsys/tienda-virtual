import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './apiService';
import { CoverAdapter } from '../adapters/cover.adapter';
import { Cover } from '../models/cover.model';

@Injectable({
  providedIn: 'root'
})
export class CoversService extends ApiService<Cover> {
  constructor(
    http: HttpClient,
    coverAdapter: CoverAdapter
  ) {
    super(http, coverAdapter, "covers")
  }
}
