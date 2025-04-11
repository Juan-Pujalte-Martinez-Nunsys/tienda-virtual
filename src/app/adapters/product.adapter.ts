import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Img } from '../models/img.model';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapter implements Adapter<Img> {

  constructor() { }

  adapt(data: any): Img {
    return new Img(data.alt, data.data);
  }
}
