import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skip3Page } from './skip3.page';

describe('Skip3Page', () => {
  let component: Skip3Page;
  let fixture: ComponentFixture<Skip3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Skip3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
