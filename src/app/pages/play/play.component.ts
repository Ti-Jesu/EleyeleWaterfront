import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
    config.showNavigationArrows=false;
    config.showNavigationIndicators=false;
    config.interval=0;
    config.wrap=false;


   }

  ngOnInit(): void {
  }
  images = [0].map((n) => `assets/play/${n}.jpg`);
}
