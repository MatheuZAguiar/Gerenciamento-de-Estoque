import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquemovimentacaoComponent } from './estoquemovimentacao.component';

describe('EstoquemovimentacaoComponent', () => {
  let component: EstoquemovimentacaoComponent;
  let fixture: ComponentFixture<EstoquemovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoquemovimentacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstoquemovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
