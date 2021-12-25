import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeMieEsperienzeComponent } from './le-mie-esperienze.component';

describe('LeMieEsperienzeComponent', () => {
  let component: LeMieEsperienzeComponent;
  let fixture: ComponentFixture<LeMieEsperienzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeMieEsperienzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeMieEsperienzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
