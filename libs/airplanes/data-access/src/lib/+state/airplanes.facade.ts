import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromAirplanes from './airplanes.reducer';
import * as AirplanesSelectors from './airplanes.selectors';
import * as AirplanesActions from './airplanes.actions';

@Injectable()
export class AirplanesFacade {
  loaded$ = this.store.pipe(select(AirplanesSelectors.getAirplanesLoaded));
  allAirplanes$ = this.store.pipe(select(AirplanesSelectors.getAllAirplanes));
  selectedAirplanes$ = this.store.pipe(select(AirplanesSelectors.getSelected));

  constructor(private store: Store<fromAirplanes.AirplanesPartialState>) {}

  loadAll() {
    this.store.dispatch(AirplanesActions.loadAirplanes());
  }
}
