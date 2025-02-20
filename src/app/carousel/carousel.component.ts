import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
    {
      title: 'Equipos de gabinete',
      image: '/images/slide1.jpg',
      text: {
        heading: 'Distribuidor autorizado de la marca',
        subheading: 'Terason.',
        paragraph:
          'Con los mejores planes de financiamiento.',
      },
    },
    {
      title: 'Equipos Completos',
      image: '/images/slide2.png',
      text: {
        heading: 'Imagenes de alta precisión',
        subheading: 'al alcance de tu mano.',
        paragraph: 'Equipos de alta calidad para los mejores resultados.',
      },
    },
    {
      title: 'Equipos Portátiles',
      image: '/images/slide3.png',
      text: {
        heading: 'Renueva fácil,',
        subheading: 'tomamos tu equipos a cuenta.',
        paragraph: '¡Por un mejor diagnostico!.',
      },
    },
    {
      title: 'Equipos en General',
      image: '/images/slide4.png',
      text: {
        heading: '¿Tienes problemas con tu equipo?',
        subheading: 'Nosotros te asesoramos en todas las marcas.',
      },
    },
  ];

  indexAct: number = 0;
  interID: any;
  enTransicion: boolean = false;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interID = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.interID) {
      clearInterval(this.interID);
    }
  }

  next() {
    this.enTransicion = true;
    setTimeout(() => {
      this.indexAct = (this.indexAct + 1) % this.items.length;
      this.enTransicion = false;
    }, 500);
  }

  onImageLoad() {
    this.enTransicion = false;
  }
}
