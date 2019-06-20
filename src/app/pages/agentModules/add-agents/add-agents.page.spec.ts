import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentsPage } from './add-agents.page';

describe('AddAgentsPage', () => {
  let component: AddAgentsPage;
  let fixture: ComponentFixture<AddAgentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
