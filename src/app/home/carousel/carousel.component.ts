import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../img.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  covers?: Img[];

  constructor(
    private http: HttpClient
  ) {
    this.getCovers().subscribe(
      (data) => {
        this.covers = data;
        console.log(this.covers)
      }
    );
  }

  public getCovers(): Observable<Img[]> {
    return this.http.get<Img[]>("http://localhost:4100/covers");
  }
}
