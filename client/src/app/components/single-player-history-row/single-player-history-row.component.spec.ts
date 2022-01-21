import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerHistoryRowComponent } from './single-player-history-row.component';

describe('SinglePlayerHistoryRowComponent', () => {
  let component: SinglePlayerHistoryRowComponent;
  let fixture: ComponentFixture<SinglePlayerHistoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlayerHistoryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerHistoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
