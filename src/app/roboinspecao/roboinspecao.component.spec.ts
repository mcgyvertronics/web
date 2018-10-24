import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboInspecaoComponent } from './roboinspecao.component';

describe('RoboInspecaoComponent', () => {
  let component: RoboInspecaoComponent;
  let fixture: ComponentFixture<RoboInspecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboInspecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboInspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
