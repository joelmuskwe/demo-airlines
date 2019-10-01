import { AirplanesEntity } from './airplanes.models';
import {
  AirplanesState,
  airplanesAdapter,
  initialState
} from './airplanes.reducer';
import * as AirplanesSelectors from './airplanes.selectors';

describe('Airplanes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAirplanesId = it => it['id'];
  const createAirplanesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AirplanesEntity);

  let state;

  beforeEach(() => {
    state = {
      airplanes: airplanesAdapter.addAll(
        [
          createAirplanesEntity('PRODUCT-AAA'),
          createAirplanesEntity('PRODUCT-BBB'),
          createAirplanesEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Airplanes Selectors', () => {
    it('getAllAirplanes() should return the list of Airplanes', () => {
      const results = AirplanesSelectors.getAllAirplanes(state);
      const selId = getAirplanesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AirplanesSelectors.getSelected(state);
      const selId = getAirplanesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getAirplanesLoaded() should return the current 'loaded' status", () => {
      const result = AirplanesSelectors.getAirplanesLoaded(state);

      expect(result).toBe(true);
    });

    it("getAirplanesError() should return the current 'error' state", () => {
      const result = AirplanesSelectors.getAirplanesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
