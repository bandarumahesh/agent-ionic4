import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Events} from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-chat-messages-room',
  templateUrl: './chat-messages-room.page.html',
  styleUrls: ['./chat-messages-room.page.scss'],
})
export class ChatMessagesRoomPage implements OnInit {

  // @ViewChild(Content) content: Content;
  // @ViewChild('chat_input') messageInput: ElementRef;
  // msgList: ChatMessage[] = [];
  // user: UserInfo;
  // toUser: UserInfo;
  // editorMsg = '';
  // showEmojiPicker = false;
  constructor(
    // private chatService: ChatService,
    private events: Events,) { }

  ngOnInit() {
  }

  // ionViewWillLeave() {
  //   this.events.unsubscribe('chat:received');
  // }

  // ionViewDidEnter() {
  //   this.getMsg();

  //   this.events.subscribe('chat:received', msg => {
  //     this.pushNewMsg(msg);
  //   })
  // }

  // onFocus() {
  //   this.showEmojiPicker = false;
  //   this.content.resize();
  //   this.scrollToBottom();
  // }

  // switchEmojiPicker() {
  //   this.showEmojiPicker = !this.showEmojiPicker;
  //   if (!this.showEmojiPicker) {
  //     this.focus();
  //   } else {
  //     this.setTextareaScroll();
  //   }
  //   this.content.resize();
  //   this.scrollToBottom();
  // }

  // /**
  //  * @name getMsg
  //  * @returns {Promise<ChatMessage[]>}
  //  */
  // getMsg() {
  //   // Get mock message list
  //   return this.chatService
  //   .getMsgList()
  //   .subscribe(res => {
  //     this.msgList = res;
  //     this.scrollToBottom();
  //   });
  // }

  // /**
  //  * @name sendMsg
  //  */
  // sendMsg() {
  //   if (!this.editorMsg.trim()) return;

  //   const id = Date.now().toString();
  //   let newMsg: ChatMessage = {
  //     messageId: Date.now().toString(),
  //     userId: this.user.id,
  //     userName: this.user.name,
  //     userAvatar: this.user.avatar,
  //     toUserId: this.toUser.id,
  //     time: Date.now(),
  //     message: this.editorMsg,
  //     status: 'pending'
  //   };

  //   this.pushNewMsg(newMsg);
  //   this.editorMsg = '';

  //   if (!this.showEmojiPicker) {
  //     this.focus();
  //   }

  //   this.chatService.sendMsg(newMsg)
  //   .then(() => {
  //     let index = this.getMsgIndexById(id);
  //     if (index !== -1) {
  //       this.msgList[index].status = 'success';
  //     }
  //   })
  // }

  // /**
  //  * @name pushNewMsg
  //  * @param msg
  //  */
  // pushNewMsg(msg: ChatMessage) {
  //   const userId = this.user.id,
  //     toUserId = this.toUser.id;
  //   if (msg.userId === userId && msg.toUserId === toUserId) {
  //     this.msgList.push(msg);
  //   } else if (msg.toUserId === userId && msg.userId === toUserId) {
  //     this.msgList.push(msg);
  //   }
  //   this.scrollToBottom();
  // }

  // getMsgIndexById(id: string) {
  //   return this.msgList.findIndex(e => e.messageId === id)
  // }

  // scrollToBottom() {
  //   setTimeout(() => {
  //     if (this.content.scrollToBottom) {
  //       this.content.scrollToBottom();
  //     }
  //   }, 400)
  // }

  // private focus() {
  //   if (this.messageInput && this.messageInput.nativeElement) {
  //     this.messageInput.nativeElement.focus();
  //   }
  // }

  // private setTextareaScroll() {
  //   const textarea =this.messageInput.nativeElement;
  //   textarea.scrollTop = textarea.scrollHeight;
  // }
}
