import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponentComponent } from './not-found-page-component.component';

describe('NotFoundPageComponentComponent', () => {
  let component: NotFoundPageComponentComponent;
  let fixture: ComponentFixture<NotFoundPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponentComponent]
    });
    fixture = TestBed.createComponent(NotFoundPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
