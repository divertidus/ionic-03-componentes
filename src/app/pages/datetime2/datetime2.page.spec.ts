import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Datetime2Page } from './datetime2.page';

describe('Datetime2Page', () => {
  let component: Datetime2Page;
  let fixture: ComponentFixture<Datetime2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Datetime2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
