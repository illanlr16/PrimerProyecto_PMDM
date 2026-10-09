import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vegetales } from './vegetales';

describe('Vegetales', () => {
  let component: Vegetales;
  let fixture: ComponentFixture<Vegetales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vegetales],
    }).compileComponents();

    fixture = TestBed.createComponent(Vegetales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
