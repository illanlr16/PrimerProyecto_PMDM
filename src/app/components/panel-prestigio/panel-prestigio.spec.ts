import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelPrestigio } from './panel-prestigio';

describe('PanelPrestigio', () => {
  let component: PanelPrestigio;
  let fixture: ComponentFixture<PanelPrestigio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelPrestigio],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelPrestigio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
