import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromCategories from './categories.reducer';
import * as CategoriesSelectors from './categories.selectors';
import * as CategoriesActions from './categories.actions';

@Injectable()
export class CategoriesFacade {
  loaded$ = this.store.pipe(select(CategoriesSelectors.getCategoriesLoaded));
  allCategories$ = this.store.pipe(
    select(CategoriesSelectors.getAllCategories)
  );
  selectedCategories$ = this.store.pipe(
    select(CategoriesSelectors.getSelected)
  );

  constructor(private store: Store<fromCategories.CategoriesPartialState>) {}

  loadAll() {
    this.store.dispatch(CategoriesActions.loadCategories());
  }
}
