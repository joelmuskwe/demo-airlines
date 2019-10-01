import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AIRPLANES_FEATURE_KEY,
  AirplanesState,
  AirplanesPartialState,
  airplanesAdapter
} from './airplanes.reducer';

// Lookup the 'Airplanes' feature state managed by NgRx
export const getAirplanesState = createFeatureSelector<
  AirplanesPartialState,
  AirplanesState
>(AIRPLANES_FEATURE_KEY);

const { selectAll, selectEntities } = airplanesAdapter.getSelectors();

export const getAirplanesLoaded = createSelector(
  getAirplanesState,
  (state: AirplanesState) => state.loaded
);

export const getAirplanesError = createSelector(
  getAirplanesState,
  (state: AirplanesState) => state.error
);

export const getAllAirplanes = createSelector(
  getAirplanesState,
  (state: AirplanesState) => selectAll(state)
);

export const getAirplanesEntities = createSelector(
  getAirplanesState,
  (state: AirplanesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAirplanesState,
  (state: AirplanesState) => state.selectedId
);

export const getSelected = createSelector(
  getAirplanesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
