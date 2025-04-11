import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../apis/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products?: Product[];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe(
      products => this.products = products
    );
  }
}
