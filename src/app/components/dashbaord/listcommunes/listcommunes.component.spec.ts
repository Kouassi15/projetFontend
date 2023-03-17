import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommunesComponent } from './listcommunes.component';

describe('ListcommunesComponent', () => {
  let component: ListcommunesComponent;
  let fixture: ComponentFixture<ListcommunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcommunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
