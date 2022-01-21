import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyButtonComponent } from './difficulty-button.component';

describe('DifficultyButtonComponent', () => {
  let component: DifficultyButtonComponent;
  let fixture: ComponentFixture<DifficultyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
