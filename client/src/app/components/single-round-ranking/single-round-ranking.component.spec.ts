import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoundRankingComponent } from './single-round-ranking.component';

describe('SingleRoundRankingComponent', () => {
  let component: SingleRoundRankingComponent;
  let fixture: ComponentFixture<SingleRoundRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRoundRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoundRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
