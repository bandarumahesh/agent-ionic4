import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoardListPage } from './chat-board-list.page';

describe('ChatBoardListPage', () => {
  let component: ChatBoardListPage;
  let fixture: ComponentFixture<ChatBoardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoardListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
