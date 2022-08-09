import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoviePriceHeroService } from '../movie-price-hero.service';

@Component({
  selector: 'app-seat-rows',
  templateUrl: './seat-rows.component.html',
  styleUrls: ['./seat-rows.component.css'],
})
export class SeatRowsComponent implements OnInit {
  @ViewChild('count', { static: true }) count: ElementRef | undefined;
  @ViewChild('total', { static: true }) total: ElementRef | undefined;
  selectedSeatsCount: number = 0;
  totalPrice: number = 0;
  priceValue: number = 0;

  constructor(private moviePriceHeroService: MoviePriceHeroService) {}

  ngOnInit(): void {}

  onOccupySeat(event: any) {
    if (
      event.target.classList.contains('seat') &&
      !event.target.classList.contains('occupied')
    ) {
      event.target.classList.toggle('selected');
    }
    
    this.updateSelectedCount();
  }

  updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    this.selectedSeatsCount = selectedSeatsCount;
    this.moviePriceHeroService.priceUpdated.subscribe((priceValue) => {
      this.priceValue = priceValue;
      console.log(this.totalPrice);
    });
    this.totalPrice = this.selectedSeatsCount * this.priceValue;
    console.log(this.totalPrice);
  }

  updatePrice(event) {
    this.priceValue = event;
    this.updateSelectedCount();
  }
}
