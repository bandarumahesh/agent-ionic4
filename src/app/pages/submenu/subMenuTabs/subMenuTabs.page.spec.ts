import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { subMenuTabsPage } from './subMenuTabs.page';
describe('subMenuTabsPage', () => {
  let component: subMenuTabsPage;
  let fixture: ComponentFixture<subMenuTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ subMenuTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(subMenuTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
