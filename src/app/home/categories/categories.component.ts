import { Component, OnInit } from '@angular/core';
import { Img } from '../../api/img.model';
import { CategoriesService } from '../../api/categories.service';

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
    this.imgService.get().subscribe(
      categoriesImages => this.categoriesImages = categoriesImages
    );
  }
}
