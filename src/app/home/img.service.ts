import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from './img.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private server = "http://localhost:4100/"

  constructor(
    private http: HttpClient
  ) { }

  public getCoversImages(): Observable<Img[]> {
    return this.http.get<Img[]>(this.server + "covers");
  }

  public getProductsImages(): Observable<Img[]> {
    return this.http.get<Img[]>(this.server + "products");
  }

  public getCategoriesImages(): Observable<Img[]> {
    return this.http.get<Img[]>(this.server + "categories");
  }
}
