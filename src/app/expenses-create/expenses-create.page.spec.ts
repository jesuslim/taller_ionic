import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesCreatePage } from './expenses-create.page';

describe('ExpensesCreatePage', () => {
  let component: ExpensesCreatePage;
  let fixture: ComponentFixture<ExpensesCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpensesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
