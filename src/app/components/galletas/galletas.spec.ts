import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Galletas } from './galletas';

describe('Galletas', () => {
  let component: Galletas;
  let fixture: ComponentFixture<Galletas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galletas],
    }).compileComponents();

    fixture = TestBed.createComponent(Galletas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
