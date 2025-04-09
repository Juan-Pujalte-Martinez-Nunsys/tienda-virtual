import { Component, OnInit } from '@angular/core';
import { Img } from '../img.model';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  coversImages?: Img[];

  constructor(
    private imgService: ImgService
  ) {}

  ngOnInit(): void {
    this.imgService.getCoversImages().subscribe(
      coversImages => this.coversImages = coversImages
    );
  }
}
