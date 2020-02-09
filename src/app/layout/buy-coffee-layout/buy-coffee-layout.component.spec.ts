import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoffeeLayoutComponent } from './buy-coffee-layout.component';

describe('BuyCoffeeLayoutComponent', () => {
  let component: BuyCoffeeLayoutComponent;
  let fixture: ComponentFixture<BuyCoffeeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCoffeeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCoffeeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
