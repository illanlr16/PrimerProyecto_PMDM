import { TestBed } from '@angular/core/testing';
import { Mejoras } from './mejoras';

describe('Mejoras', () => {
  let service: Mejoras;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mejoras);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
