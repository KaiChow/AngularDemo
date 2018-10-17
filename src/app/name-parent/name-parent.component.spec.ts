/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NameParentComponent } from './name-parent.component';

describe('NameParentComponent', () => {
  let component: NameParentComponent;
  let fixture: ComponentFixture<NameParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
