import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrative-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './administrative-menu.component.html',
  styleUrl: './administrative-menu.component.css',
})
export class AdministrativeMenuComponent {
  contactos = [
    {
      nombre: 'Omega Morales',
      email: 'rolandoCalles@gmail.com',
      estado: 'Resuelto',
      mensaje:
        'No vale madre la maestra de programacion que no entiende nada de lo que explica y nos tiene todo el día perdiendo el tiempo.',
    },
  ];
}
