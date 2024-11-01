import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skip4Page } from './skip4.page';

describe('Skip4Page', () => {
  let component: Skip4Page;
  let fixture: ComponentFixture<Skip4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Skip4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
