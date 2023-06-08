import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCateComponent } from './add-cate.component';

describe('AddCateComponent', () => {
  let component: AddCateComponent;
  let fixture: ComponentFixture<AddCateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCateComponent]
    });
    fixture = TestBed.createComponent(AddCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
