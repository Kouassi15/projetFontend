import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsdashComponent } from './navbarsdash.component';

describe('NavbarsdashComponent', () => {
  let component: NavbarsdashComponent;
  let fixture: ComponentFixture<NavbarsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
