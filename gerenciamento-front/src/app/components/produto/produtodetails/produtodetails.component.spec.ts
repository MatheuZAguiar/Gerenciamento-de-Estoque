import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutodetailsComponent } from './produtodetails.component';

describe('ProdutodetailsComponent', () => {
  let component: ProdutodetailsComponent;
  let fixture: ComponentFixture<ProdutodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
