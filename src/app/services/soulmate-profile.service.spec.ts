import { TestBed } from '@angular/core/testing';

import { SoulmateProfileService } from './soulmate-profile.service';

describe('SoulmateProfileService', () => {
  let service: SoulmateProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoulmateProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
