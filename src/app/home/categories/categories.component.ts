import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../apis/categories.service';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
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
