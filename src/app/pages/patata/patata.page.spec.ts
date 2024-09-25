import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatataPage } from './patata.page';

describe('PatataPage', () => {
  let component: PatataPage;
  let fixture: ComponentFixture<PatataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
