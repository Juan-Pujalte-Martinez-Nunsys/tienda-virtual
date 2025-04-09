import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ProductsComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'tienda-virtual';
}
