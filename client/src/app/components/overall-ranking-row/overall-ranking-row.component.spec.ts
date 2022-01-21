import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRankingRowComponent } from './overall-ranking-row.component';

describe('OverallRankingRowComponent', () => {
  let component: OverallRankingRowComponent;
  let fixture: ComponentFixture<OverallRankingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRankingRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRankingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
