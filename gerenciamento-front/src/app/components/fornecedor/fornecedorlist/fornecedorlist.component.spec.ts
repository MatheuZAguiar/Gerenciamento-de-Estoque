import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorlistComponent } from './fornecedorlist.component';

describe('FornecedorlistComponent', () => {
  let component: FornecedorlistComponent;
  let fixture: ComponentFixture<FornecedorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FornecedorlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FornecedorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
