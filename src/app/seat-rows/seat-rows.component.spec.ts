import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatRowsComponent } from './seat-rows.component';

describe('SeatRowsComponent', () => {
  let component: SeatRowsComponent;
  let fixture: ComponentFixture<SeatRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
