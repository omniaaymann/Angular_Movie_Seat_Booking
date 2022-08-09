import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { MovieShowcaseComponent } from './movie-showcase/movie-showcase.component';
import { SeatRowsComponent } from './seat-rows/seat-rows.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieContainerComponent,
    MovieShowcaseComponent,
    SeatRowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
