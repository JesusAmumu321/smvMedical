import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent {
  currentYear: number = new Date().getFullYear();
  fechaActualizacion: string = 'DIA/MES/AÑO';
  ngOnInit() {
    // Puedes añadir lógica adicional si es necesario
  }
}
