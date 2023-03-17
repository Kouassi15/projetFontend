import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHopitalComponent } from './list-hopital.component';

describe('ListHopitalComponent', () => {
  let component: ListHopitalComponent;
  let fixture: ComponentFixture<ListHopitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHopitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
