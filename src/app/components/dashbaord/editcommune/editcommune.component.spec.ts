import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommuneComponent } from './editcommune.component';

describe('EditcommuneComponent', () => {
  let component: EditcommuneComponent;
  let fixture: ComponentFixture<EditcommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
