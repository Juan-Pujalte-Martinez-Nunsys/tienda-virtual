import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../img.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products?: Img[];

  constructor(
    private http: HttpClient
  ) {
    
    this.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products)
      }
    );
  }

  public getProducts(): Observable<Img[]> {
    return this.http.get<Img[]>("http://localhost:4100/products")
  }
}
