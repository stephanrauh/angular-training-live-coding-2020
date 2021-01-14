import { TestBed } from '@angular/core/testing';

import { NestedRestCallsService } from './nested-rest-calls.service';

describe('NestedRestCallsService', () => {
  let service: NestedRestCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedRestCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
