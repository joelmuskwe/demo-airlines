import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { CategoriesPartialState } from './categories.reducer';
import * as CategoriesActions from './categories.actions';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(() =>
    this.dataPersistence.fetch(CategoriesActions.loadCategories, {
      run: (
        action: ReturnType<typeof CategoriesActions.loadCategories>,
        state: CategoriesPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return CategoriesActions.loadCategoriesSuccess({ categories: [] });
      },

      onError: (
        action: ReturnType<typeof CategoriesActions.loadCategories>,
        error
      ) => {
        console.error('Error', error);
        return CategoriesActions.loadCategoriesFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CategoriesPartialState>
  ) {}
}
