import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'categories', component: CategoriesComponent}
];
