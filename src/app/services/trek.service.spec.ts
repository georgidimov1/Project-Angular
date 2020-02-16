import { TestBed } from '@angular/core/testing';

import { TrekService } from './trek.service';

describe('TrekService', () => {
  let service: TrekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
