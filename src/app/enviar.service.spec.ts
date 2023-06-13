import { TestBed } from '@angular/core/testing';

import { EnviarService } from './service/enviar.service';

describe('EnviarService', () => {
  let service: EnviarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
