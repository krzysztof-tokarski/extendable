import { TestBed } from '@angular/core/testing';

import { FacadeToastrService } from './facade-toastr.service';

describe('FacadeToastrService', () => {
  let service: FacadeToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
