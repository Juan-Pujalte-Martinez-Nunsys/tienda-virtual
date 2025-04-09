import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from './img.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'tienda-virtual';
  covers?: Img[];
  products?: Img[];

  constructor(
    private http: HttpClient
  ) {
    this.getCovers().subscribe(
      (data) => {
        this.covers = data;
        console.log(this.covers)
      }
    );
    this.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products)
      }
    );
  }

  public getCovers(): Observable<Img[]> {
    return this.http.get<Img[]>("http://localhost:4100/covers");
  }

  public getProducts(): Observable<Img[]> {
    return this.http.get<Img[]>("http://localhost:4100/products")
  }
}
