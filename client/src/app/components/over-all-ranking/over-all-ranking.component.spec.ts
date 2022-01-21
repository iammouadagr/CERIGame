import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAllRankingComponent } from './over-all-ranking.component';

describe('OverAllRankingComponent', () => {
  let component: OverAllRankingComponent;
  let fixture: ComponentFixture<OverAllRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverAllRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverAllRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
