import { async, TestBed } from '@angular/core/testing';
import { CategoriesFeatureShellModule } from './categories-feature-shell.module';

describe('CategoriesFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CategoriesFeatureShellModule).toBeDefined();
  });
});
