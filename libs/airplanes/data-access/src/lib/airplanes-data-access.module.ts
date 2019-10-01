import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAirplanes from './+state/airplanes.reducer';
import { AirplanesEffects } from './+state/airplanes.effects';
import { AirplanesFacade } from './+state/airplanes.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAirplanes.AIRPLANES_FEATURE_KEY,
      fromAirplanes.reducer
    ),
    EffectsModule.forFeature([AirplanesEffects])
  ],
  providers: [AirplanesFacade]
})
export class AirplanesDataAccessModule {}
