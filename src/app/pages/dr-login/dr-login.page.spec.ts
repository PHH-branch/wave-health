import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrLoginPage } from './dr-login.page';

describe('DrLoginPage', () => {
  let component: DrLoginPage;
  let fixture: ComponentFixture<DrLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
