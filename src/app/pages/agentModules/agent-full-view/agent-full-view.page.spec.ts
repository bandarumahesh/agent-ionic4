import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentFullViewPage } from './agent-full-view.page';

describe('AgentFullViewPage', () => {
  let component: AgentFullViewPage;
  let fixture: ComponentFixture<AgentFullViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentFullViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentFullViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
