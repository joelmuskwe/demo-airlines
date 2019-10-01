import { AirplanesEntity } from './airplanes.models';
import * as AirplanesActions from './airplanes.actions';
import { AirplanesState, initialState, reducer } from './airplanes.reducer';

describe('Airplanes Reducer', () => {
  const createAirplanesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AirplanesEntity);

  beforeEach(() => {});

  describe('valid Airplanes actions', () => {
    it('loadAirplanesSuccess should return set the list of known Airplanes', () => {
      const airplanes = [
        createAirplanesEntity('PRODUCT-AAA'),
        createAirplanesEntity('PRODUCT-zzz')
      ];
      const action = AirplanesActions.loadAirplanesSuccess({ airplanes });

      const result: AirplanesState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
