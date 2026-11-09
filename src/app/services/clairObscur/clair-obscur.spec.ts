import { TestBed } from '@angular/core/testing';
import { ClairObscur } from './clair-obscur';

describe('ClairObscur', () => {
  let service: ClairObscur;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClairObscur);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
