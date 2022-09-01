import { TestBed } from '@angular/core/testing';

import { HttpRestService } from './http-rest.service';

describe('HttpRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRestService = TestBed.get(HttpRestService);
    expect(service).toBeTruthy();
  });
});
