import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFixComponent } from './nav-bar-fix.component';

describe('NavBarFixComponent', () => {
  let component: NavBarFixComponent;
  let fixture: ComponentFixture<NavBarFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
