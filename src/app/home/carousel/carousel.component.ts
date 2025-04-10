import { Component, OnInit } from '@angular/core';
import { Img } from '../../models/img.model';
import { CoversService } from '../../apis/covers.service';

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
    private imgService: CoversService
  ) {}

  ngOnInit(): void {
    this.imgService.getAll().subscribe(
      coversImages => this.coversImages = coversImages
    );
  }
}
