import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaoxComponent } from './ngaox.component';

describe('NgaoxComponent', () => {
  let component: NgaoxComponent;
  let fixture: ComponentFixture<NgaoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgaoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
