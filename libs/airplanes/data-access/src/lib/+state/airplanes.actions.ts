import { createAction, props } from '@ngrx/store';
import { AirplanesEntity } from './airplanes.models';

export const loadAirplanes = createAction('[Airplanes] Load Airplanes');

export const loadAirplanesSuccess = createAction(
  '[Airplanes] Load Airplanes Success',
  props<{ airplanes: AirplanesEntity[] }>()
);

export const loadAirplanesFailure = createAction(
  '[Airplanes] Load Airplanes Failure',
  props<{ error: any }>()
);
