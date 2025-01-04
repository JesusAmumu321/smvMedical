import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
// export class HeaderComponent implements OnInit {
//   isOpen = false;

//   constructor() {}

//   ngOnInit(): void {}

//   abrirCerrarMenu(): void {
//     console.log('IsOpen = ', this.isOpen);
//     this.isOpen = !this.isOpen; // modifica el estado, haciendo que este abierto o no
//   }
// }
export class HeaderComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {
    console.log('Método ngOnInit ejecutado\n'); // Depuración
    console.log('\nisOpen:', this.isOpen, '\n'); // Verifica el valor de isOpen
  }

  abrirCerrarMenu(): void {
    console.log('Método abrirCerrarMenu ejecutado\n'); // Depuración
    this.isOpen = !this.isOpen;
    console.log('\nisOpen:', this.isOpen, '\n'); // Verifica el valor de isOpen
  }
}
