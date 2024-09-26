import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomColorsPage } from './custom-colors.page';

describe('CustomColorsPage', () => {
  let component: CustomColorsPage;
  let fixture: ComponentFixture<CustomColorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
