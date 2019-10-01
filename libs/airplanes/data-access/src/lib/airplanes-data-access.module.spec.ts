import { async, TestBed } from '@angular/core/testing';
import { AirplanesDataAccessModule } from './airplanes-data-access.module';

describe('AirplanesDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AirplanesDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AirplanesDataAccessModule).toBeDefined();
  });
});
