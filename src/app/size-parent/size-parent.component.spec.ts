/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SizeParentComponent } from './size-parent.component';

describe('SizeParentComponent', () => {
  let component: SizeParentComponent;
  let fixture: ComponentFixture<SizeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
