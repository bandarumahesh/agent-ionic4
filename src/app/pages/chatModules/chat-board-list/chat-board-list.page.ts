import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat-board-list',
  templateUrl: './chat-board-list.page.html',
  styleUrls: ['./chat-board-list.page.scss'],
})
export class ChatBoardListPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  gotoChatRoom(){
this.router.navigate(['/chatMessagesRoom'])
  }
}
