import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageAdapter implements Adapter<Image> {

  constructor() { }

  adapt(item: any) : Image{
    return new Image(item.alt, item.data)
  }
}
