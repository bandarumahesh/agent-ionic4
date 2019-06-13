import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTab3Page } from './subtab3.page';

describe('SubTab3Page', () => {
  let component: SubTab3Page;
  let fixture: ComponentFixture<SubTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
