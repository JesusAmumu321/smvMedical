import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
    {
      title: 'Equipos de gabinete',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.',
      image: '/images/slider1.png',
      link: '/productsGab',
    },
    {
      title: 'Equipos Completos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.',
      image: '/images/slider2.png',
      link: '/productsComp',
    },
    {
      title: 'Equipos Portátiles',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.',
      image: '/images/slider3.png',
      link: '/productsPor',
    },
  ];

  currentIndex: number = 0;
  intervalId: any;
  isTransitioning: boolean = false;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000); /// milisecs
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.isTransitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.isTransitioning = false;
    }, 500); // debe de estar igual q el css
  }

  onImageLoad() {
    this.isTransitioning = false;
  }
}
