import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipForAgencyPage } from './membership-for-agency.page';

describe('MembershipForAgencyPage', () => {
  let component: MembershipForAgencyPage;
  let fixture: ComponentFixture<MembershipForAgencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipForAgencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipForAgencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
