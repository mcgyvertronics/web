import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoRoboticaComponent } from './maorobotica.component';

describe('MaoRoboticaComponent', () => {
  let component: MaoRoboticaComponent;
  let fixture: ComponentFixture<MaoRoboticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaoRoboticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaoRoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
