import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../img.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories?: Img[];

  constructor(
    private http: HttpClient
  ) {
    
    this.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories)
      }
    );
  }

  public getCategories(): Observable<Img[]> {
    return this.http.get<Img[]>("http://localhost:4100/categories")
  }
}
