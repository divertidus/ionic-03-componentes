import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Input2Page } from './input2.page';

describe('Input2Page', () => {
  let component: Input2Page;
  let fixture: ComponentFixture<Input2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Input2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
