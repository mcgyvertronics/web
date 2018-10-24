import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeRobotComponent } from "./snakerobot.component";

describe('SnakeRobotComponent', () => {
  let component: SnakeRobotComponent;
  let fixture: ComponentFixture<SnakeRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
