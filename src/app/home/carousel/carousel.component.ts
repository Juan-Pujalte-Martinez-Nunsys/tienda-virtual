import { Component, OnInit } from '@angular/core';
import { Img } from '../../api/img.model';
import { CoversService } from '../../api/covers.service';

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
    this.imgService.get().subscribe(
      coversImages => this.coversImages = coversImages
    );
  }
}
