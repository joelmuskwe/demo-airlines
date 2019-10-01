import { async, TestBed } from '@angular/core/testing';
import { CategoriesDataAccessModule } from './categories-data-access.module';

describe('CategoriesDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CategoriesDataAccessModule).toBeDefined();
  });
});
