import { Component, OnInit } from '@angular/core';
import { Img } from '../img.model';
import { ImgService } from '../img.service';

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
    private imgService: ImgService
  ) {}

  ngOnInit(): void {
    this.imgService.getProductsImages().subscribe(
      productsImages => this.productsImages = productsImages
    );
  }
}
