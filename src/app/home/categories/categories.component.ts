import { Component, OnInit } from '@angular/core';
import { Img } from '../../models/img.model';
import { CategoriesService } from '../../apis/categories.service';

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
    private imgService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.imgService.getAll().subscribe(
      categoriesImages => this.categoriesImages = categoriesImages
    );
  }
}
