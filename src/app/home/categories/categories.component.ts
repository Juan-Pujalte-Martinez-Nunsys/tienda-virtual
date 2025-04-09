import { Component, OnInit } from '@angular/core';
import { Img } from '../img.model';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categoriesImages?: Img[];

  constructor(
    private imgService: ImgService
  ) {}

  ngOnInit(): void {
    this.imgService.getCategoriesImages().subscribe(
      categoriesImages => this.categoriesImages = categoriesImages
    );
  }
}
