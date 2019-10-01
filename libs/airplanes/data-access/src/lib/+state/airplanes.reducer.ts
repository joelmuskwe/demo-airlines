import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AirplanesActions from './airplanes.actions';
import { AirplanesEntity } from './airplanes.models';

export const AIRPLANES_FEATURE_KEY = 'airplanes';

export interface AirplanesState extends EntityState<AirplanesEntity> {
  selectedId?: string | number; // which Airplanes record has been selected
  loaded: boolean; // has the Airplanes list been loaded
  error?: string | null; // last none error (if any)
}

export interface AirplanesPartialState {
  readonly [AIRPLANES_FEATURE_KEY]: AirplanesState;
}

export const airplanesAdapter: EntityAdapter<
  AirplanesEntity
> = createEntityAdapter<AirplanesEntity>();

export const initialState: AirplanesState = airplanesAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const airplanesReducer = createReducer(
  initialState,
  on(AirplanesActions.loadAirplanes, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AirplanesActions.loadAirplanesSuccess, (state, { airplanes }) =>
    airplanesAdapter.addAll(airplanes, { ...state, loaded: true })
  ),
  on(AirplanesActions.loadAirplanesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: AirplanesState | undefined, action: Action) {
  return airplanesReducer(state, action);
}
