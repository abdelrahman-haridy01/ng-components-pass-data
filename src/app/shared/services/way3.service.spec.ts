import { TestBed } from '@angular/core/testing';

import { Way3Service } from './way3.service';

describe('Way3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Way3Service = TestBed.get(Way3Service);
    expect(service).toBeTruthy();
  });
});
