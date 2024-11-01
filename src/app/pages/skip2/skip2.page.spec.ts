import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skip2Page } from './skip2.page';

describe('Skip2Page', () => {
  let component: Skip2Page;
  let fixture: ComponentFixture<Skip2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Skip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
