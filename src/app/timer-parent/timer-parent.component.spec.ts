/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerParentComponent } from './timer-parent.component';

describe('TimerParentComponent', () => {
  let component: TimerParentComponent;
  let fixture: ComponentFixture<TimerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
