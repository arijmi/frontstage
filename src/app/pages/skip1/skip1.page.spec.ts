import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skip1Page } from './skip1.page';

describe('Skip1Page', () => {
  let component: Skip1Page;
  let fixture: ComponentFixture<Skip1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Skip1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
