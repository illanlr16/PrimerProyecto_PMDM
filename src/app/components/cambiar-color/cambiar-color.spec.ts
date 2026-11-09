import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarColor } from './cambiar-color';

describe('CambiarColor', () => {
  let component: CambiarColor;
  let fixture: ComponentFixture<CambiarColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarColor],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
