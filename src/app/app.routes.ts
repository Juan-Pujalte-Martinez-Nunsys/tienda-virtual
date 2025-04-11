import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'about-us', component: AboutUsComponent }
];
