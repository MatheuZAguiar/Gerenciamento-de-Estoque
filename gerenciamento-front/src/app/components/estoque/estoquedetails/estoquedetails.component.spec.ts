import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquedetailsComponent } from './estoquedetails.component';

describe('EstoquedetailsComponent', () => {
  let component: EstoquedetailsComponent;
  let fixture: ComponentFixture<EstoquedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoquedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstoquedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
