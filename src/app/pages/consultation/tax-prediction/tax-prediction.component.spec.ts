import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPredictionComponent } from './tax-prediction.component';

describe('TaxPredictionComponent', () => {
  let component: TaxPredictionComponent;
  let fixture: ComponentFixture<TaxPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxPredictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
