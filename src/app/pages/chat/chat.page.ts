import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  chats = [
    { name: 'Cristiano Ronaldo', message: 'Hello!', time: '12:30 PM', image: 'assets/images/foot1.jpg', status: 'online' },
    { name: 'Jane Smith', message: 'How are you?', time: '1:15 PM', image: 'assets/images/foot6.PNG', status: 'offline' },
    { name: 'Sam Wilson', message: 'Let’s meet up.', time: '2:00 PM', image: 'assets/images/foot5.png', status: 'online' },
    { name: 'Sam Wilson', message: 'Let’s meet up.', time: '2:00 PM', image: 'assets/images/foot2.jpg', status: 'online' },
    { name: 'Sam Wilson', message: 'Let’s meet up.', time: '2:00 PM', image: 'assets/images/foot3.jpg', status: 'online' },

    // Ajoutez plus de chats ici
  ];

  filteredChats = [...this.chats]; // Liste des chats filtrés

  constructor(private navCtrl: NavController) {}

  // Méthode de recherche
  filterFriends(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredChats = this.chats.filter(chat => 
      chat.name.toLowerCase().includes(searchTerm)
    );
  }

  // Méthode pour ouvrir la page des détails du chat
  openChatDetail(chat: any) {
    this.navCtrl.navigateForward('/chat-detail', {
      queryParams: { chat: JSON.stringify(chat) }
    });
  }
}
