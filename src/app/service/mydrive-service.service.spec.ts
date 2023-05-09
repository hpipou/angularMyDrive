import { TestBed } from '@angular/core/testing';

import { MydriveServiceService } from './mydrive-service.service';

describe('MydriveServiceService', () => {
  let service: MydriveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydriveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
