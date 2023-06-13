import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ver Todos', url: '/alldigimons', icon: 'eye' },
    { title: 'Ver uno', url: '/onedigimon', icon: 'eye' },
    { title: 'Creador', url: '/creador', icon: 'person' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
