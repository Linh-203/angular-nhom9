import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcateComponent } from './listcate.component';

describe('ListcateComponent', () => {
  let component: ListcateComponent;
  let fixture: ComponentFixture<ListcateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcateComponent]
    });
    fixture = TestBed.createComponent(ListcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
