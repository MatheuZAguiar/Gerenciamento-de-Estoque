import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutolistComponent } from './produtolist.component';

describe('ProdutolistComponent', () => {
  let component: ProdutolistComponent;
  let fixture: ComponentFixture<ProdutolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
