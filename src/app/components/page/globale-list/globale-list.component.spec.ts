import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaleListComponent } from './globale-list.component';

describe('GlobaleListComponent', () => {
  let component: GlobaleListComponent;
  let fixture: ComponentFixture<GlobaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
