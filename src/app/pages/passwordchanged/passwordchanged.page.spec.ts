import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordchangedPage } from './passwordchanged.page';

describe('PasswordchangedPage', () => {
  let component: PasswordchangedPage;
  let fixture: ComponentFixture<PasswordchangedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordchangedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
