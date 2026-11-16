import { TestBed } from '@angular/core/testing';
import { Prestigio } from './prestigio';

describe('Prestigio', () => {
  let service: Prestigio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prestigio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
