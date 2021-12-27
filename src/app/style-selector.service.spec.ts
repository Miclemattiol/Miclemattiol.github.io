import { TestBed } from '@angular/core/testing';

import { StyleSelectorService } from './style-selector.service';

describe('StyleSelectorService', () => {
  let service: StyleSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
