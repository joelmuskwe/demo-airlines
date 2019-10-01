import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AirplanesPartialState } from './airplanes.reducer';
import * as AirplanesActions from './airplanes.actions';

@Injectable()
export class AirplanesEffects {
  loadAirplanes$ = createEffect(() =>
    this.dataPersistence.fetch(AirplanesActions.loadAirplanes, {
      run: (
        action: ReturnType<typeof AirplanesActions.loadAirplanes>,
        state: AirplanesPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AirplanesActions.loadAirplanesSuccess({ airplanes: [] });
      },

      onError: (
        action: ReturnType<typeof AirplanesActions.loadAirplanes>,
        error
      ) => {
        console.error('Error', error);
        return AirplanesActions.loadAirplanesFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AirplanesPartialState>
  ) {}
}
