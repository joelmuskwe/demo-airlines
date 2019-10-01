import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AirplanesEntity } from './airplanes.models';
import { AirplanesEffects } from './airplanes.effects';
import { AirplanesFacade } from './airplanes.facade';

import * as AirplanesSelectors from './airplanes.selectors';
import * as AirplanesActions from './airplanes.actions';
import {
  AIRPLANES_FEATURE_KEY,
  AirplanesState,
  initialState,
  reducer
} from './airplanes.reducer';

interface TestSchema {
  airplanes: AirplanesState;
}

describe('AirplanesFacade', () => {
  let facade: AirplanesFacade;
  let store: Store<TestSchema>;
  const createAirplanesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AirplanesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(AIRPLANES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AirplanesEffects])
        ],
        providers: [AirplanesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(AirplanesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allAirplanes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allAirplanes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadAirplanesSuccess` to manually update list
     */
    it('allAirplanes$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allAirplanes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          AirplanesActions.loadAirplanesSuccess({
            airplanes: [
              createAirplanesEntity('AAA'),
              createAirplanesEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.allAirplanes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
