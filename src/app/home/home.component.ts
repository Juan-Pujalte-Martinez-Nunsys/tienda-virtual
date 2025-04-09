import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from './img.model';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'tienda-virtual';
}
