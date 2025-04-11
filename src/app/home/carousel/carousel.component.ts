import { Component, OnInit } from '@angular/core';
import { CoversService } from '../../apis/covers.service';
import { Cover } from '../../models/cover.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  covers?: Cover[];

  constructor(
    private coversService: CoversService
  ) {}

  ngOnInit(): void {
    this.coversService.getAll().subscribe(
      covers => this.covers = covers
    );
  }
}
