import { async, TestBed } from '@angular/core/testing';
import { AirplanesFeatureShellModule } from './airplanes-feature-shell.module';

describe('AirplanesFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AirplanesFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AirplanesFeatureShellModule).toBeDefined();
  });
});
