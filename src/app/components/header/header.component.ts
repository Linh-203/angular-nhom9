import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slides = [
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Slide 1',
      text: 'This is slide 1',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Slide 2',
      text: 'This is slide 2',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Slide 3',
      text: 'This is slide 3',
    },
  ];
}
