import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoundRankingRowComponent } from './single-round-ranking-row.component';

describe('SingleRoundRankingRowComponent', () => {
  let component: SingleRoundRankingRowComponent;
  let fixture: ComponentFixture<SingleRoundRankingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRoundRankingRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoundRankingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
