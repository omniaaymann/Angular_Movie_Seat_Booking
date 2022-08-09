import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviePriceHeroService {
  priceUpdated = new EventEmitter<number>();
  constructor() {}
}
