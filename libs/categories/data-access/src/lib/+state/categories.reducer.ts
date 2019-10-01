import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CategoriesActions from './categories.actions';
import { CategoriesEntity } from './categories.models';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface CategoriesState extends EntityState<CategoriesEntity> {
  selectedId?: string | number; // which Categories record has been selected
  loaded: boolean; // has the Categories list been loaded
  error?: string | null; // last none error (if any)
}

export interface CategoriesPartialState {
  readonly [CATEGORIES_FEATURE_KEY]: CategoriesState;
}

export const categoriesAdapter: EntityAdapter<
  CategoriesEntity
> = createEntityAdapter<CategoriesEntity>();

export const initialState: CategoriesState = categoriesAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategories, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(CategoriesActions.loadCategoriesSuccess, (state, { categories }) =>
    categoriesAdapter.addAll(categories, { ...state, loaded: true })
  ),
  on(CategoriesActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: CategoriesState | undefined, action: Action) {
  return categoriesReducer(state, action);
}
