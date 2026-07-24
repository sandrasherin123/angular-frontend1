import { TestBed } from '@angular/core/testing';

import { CrudmediatorService } from './crudmediator.service';

describe('CrudmediatorService', () => {
  let service: CrudmediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudmediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
