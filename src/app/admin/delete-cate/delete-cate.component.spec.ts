import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCateComponent } from './delete-cate.component';

describe('DeleteCateComponent', () => {
  let component: DeleteCateComponent;
  let fixture: ComponentFixture<DeleteCateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCateComponent]
    });
    fixture = TestBed.createComponent(DeleteCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
