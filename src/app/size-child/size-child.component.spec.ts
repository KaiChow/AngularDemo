/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SizeChildComponent } from './size-child.component';

describe('SizeChildComponent', () => {
  let component: SizeChildComponent;
  let fixture: ComponentFixture<SizeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
