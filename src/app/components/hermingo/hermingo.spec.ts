import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hermingo } from './hermingo';

describe('Hermingo', () => {
  let component: Hermingo;
  let fixture: ComponentFixture<Hermingo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hermingo],
    }).compileComponents();

    fixture = TestBed.createComponent(Hermingo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
