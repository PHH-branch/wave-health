import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrSignupPage } from './dr-signup.page';

describe('DrSignupPage', () => {
  let component: DrSignupPage;
  let fixture: ComponentFixture<DrSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
