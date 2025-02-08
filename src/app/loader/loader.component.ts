import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  standalone: true,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('loader', { static: false }) loader!: ElementRef;

  tiles = Array(5).fill(0); // Creates an array with 5 elements for the tiles

  ngAfterViewInit() {
    // Remove active class on page load
    if (this.loader) {
      this.loader.nativeElement.classList.remove('loader--active');
    }
  }

  toggleLoader() {
    if (this.loader) {
      this.loader.nativeElement.classList.add('loader--active');

      setTimeout(() => {
        this.loader.nativeElement.classList.remove('loader--active');
      }, 5000);
    }
  }
}

