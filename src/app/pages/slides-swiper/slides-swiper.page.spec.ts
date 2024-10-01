import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlidesSwiperPage } from './slides-swiper.page';

describe('SlidesSwiperPage', () => {
  let component: SlidesSwiperPage;
  let fixture: ComponentFixture<SlidesSwiperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesSwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
