import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Category } from './models/category.model';
import { CategoriesService } from './apis/categories.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'tienda-virtual';
  categories?: Category[];
  
    constructor(
      private categoriesService: CategoriesService
    ) {}

    ngOnInit(): void {
      this.categoriesService.getAll().subscribe(
        categories => this.categories = categories
      );
    }
}
