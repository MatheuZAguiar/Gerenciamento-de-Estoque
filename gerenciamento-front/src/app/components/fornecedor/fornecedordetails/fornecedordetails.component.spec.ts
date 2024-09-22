import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedordetailsComponent } from './fornecedordetails.component';

describe('FornecedordetailsComponent', () => {
  let component: FornecedordetailsComponent;
  let fixture: ComponentFixture<FornecedordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FornecedordetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FornecedordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
