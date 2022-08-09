import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MoviePriceHeroService } from '../movie-price-hero.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css'],
})
export class MovieContainerComponent implements OnInit {
  @ViewChild('movie', { static: true }) movieSelect: ElementRef | undefined;
  ticketPrice: string | undefined;
  @Output() updatedPriceOnChangeValue = new EventEmitter<number>()
  

  constructor(private moviePriceHeroService: MoviePriceHeroService) {}

  ngOnInit(): void {}

  onCalculatePrice(event: any) {
    this.moviePriceHeroService.priceUpdated.emit(+event.target.value);
  }

  onUpdatePrice(event) {
    this.updatedPriceOnChangeValue.emit(+event.target.value);
  }
}
