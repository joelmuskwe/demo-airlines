import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AirplanesEffects } from './airplanes.effects';
import * as AirplanesActions from './airplanes.actions';

describe('AirplanesEffects', () => {
  let actions: Observable<any>;
  let effects: AirplanesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AirplanesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(AirplanesEffects);
  });

  describe('loadAirplanes$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AirplanesActions.loadAirplanes() });

      const expected = hot('-a-|', {
        a: AirplanesActions.loadAirplanesSuccess({ airplanes: [] })
      });

      expect(effects.loadAirplanes$).toBeObservable(expected);
    });
  });
});
