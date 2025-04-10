import { Component, OnInit } from '@angular/core';
import { Img } from '../../api/img.model';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsImages?: Img[];

  constructor(
    private imgService: ProductsService
  ) {}

  ngOnInit(): void {
    this.imgService.get().subscribe(
      productsImages => this.productsImages = productsImages
    );
  }
}
