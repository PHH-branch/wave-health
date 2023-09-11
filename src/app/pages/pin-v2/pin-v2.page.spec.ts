import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinV2Page } from './pin-v2.page';

describe('PinV2Page', () => {
  let component: PinV2Page;
  let fixture: ComponentFixture<PinV2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PinV2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
