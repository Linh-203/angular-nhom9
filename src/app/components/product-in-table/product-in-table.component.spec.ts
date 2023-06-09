import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInTableComponent } from './product-in-table.component';

describe('ProductInTableComponent', () => {
  let component: ProductInTableComponent;
  let fixture: ComponentFixture<ProductInTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInTableComponent]
    });
    fixture = TestBed.createComponent(ProductInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
