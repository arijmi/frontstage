import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  chat: any;
  replyMessage: string = '';
  messages: any[] = [];  // Stocke les messages

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['chat']) {
        this.chat = JSON.parse(params['chat']);
        this.messages.push({
          name: this.chat.name,
          message: this.chat.message,
          time: this.chat.time,
          image: this.chat.image
        });
      }
    });
  }

  sendReply() {
    if (this.replyMessage.trim() !== '') {
      const newMessage = {
        name: 'You',  // L'utilisateur actuel
        message: this.replyMessage,
        time: new Date().toLocaleTimeString(),  // Ajoute l'heure actuelle
        image: 'assets/foot1.jpg'  // Une image pour l'utilisateur
      };
      
      this.messages.push(newMessage);  // Ajoute le nouveau message à la liste
      this.replyMessage = '';  // Réinitialise le champ de saisie
    }
  }
}