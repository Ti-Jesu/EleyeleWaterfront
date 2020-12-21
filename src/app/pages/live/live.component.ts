import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {

    config.showNavigationArrows=false;
    config.interval=0;
    config.wrap=false;
    config.showNavigationIndicators=false;
   }

  ngOnInit(): void {
  }
  images = [0].map((n) => `assets/live/${n}.jpg`);
}
