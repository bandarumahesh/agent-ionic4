import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentJobsPage } from './agent-jobs.page';

describe('AgentJobsPage', () => {
  let component: AgentJobsPage;
  let fixture: ComponentFixture<AgentJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
