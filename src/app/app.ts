
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected title = 'projdocker';
// }
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Zajecia';
  selectedSubject = 'inzynieria';

  subjects = [
    {
      id: 'inzynieria',
      name: 'Inżynieria Oprogramowania',
      date: '20 czerwca 2025',
      time: '9:00',
      place: 'sala 1.21, Budynek Główny',
      teacher: 'dr inż. Alicja Kowalska',
      topics: [
        'Modele cyklu życia oprogramowania',
        'UML i dokumentacja projektowa',
        'Testowanie i zarządzanie jakością',
        'SCRUM i metodyki zwinne',
      ],
    },
    {
      id: 'bazy',
      name: 'Bazy Danych',
      date: '24 czerwca 2025',
      time: '11:30',
      place: 'Sala 3.02, Centrum IT',
      teacher: 'mgr Piotr Nowak',
      topics: [
        'Relacyjny model danych',
        'SQL – zapytania i procedury',
        'Indeksy i optymalizacja',
        'Transakcje i ACID',
      ],
    },
    {
      id: 'sieci',
      name: 'Sieci Komputerowe',
      date: '28 czerwca 2025',
      time: '14:00',
      place: 'Laboratorium 2.15',
      teacher: 'dr hab. Janina Zięba',
      topics: [
        'Model OSI',
        'Routing i adresacja IP',
        'Protokoły TCP/UDP',
        'Zabezpieczenia sieciowe',
      ],
    },
  ];
}