import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaodetailsComponent } from './movimentacaodetails.component';

describe('MovimentacaodetailsComponent', () => {
  let component: MovimentacaodetailsComponent;
  let fixture: ComponentFixture<MovimentacaodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacaodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentacaodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
