import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderActionsComponent } from './page-header-actions.component';

describe('PageHeaderActionsComponent', () => {
  let component: PageHeaderActionsComponent;
  let fixture: ComponentFixture<PageHeaderActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
