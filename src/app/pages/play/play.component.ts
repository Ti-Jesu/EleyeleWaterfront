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
    config.interval=0;
    config.wrap=false;


   }

  ngOnInit(): void {
  }
  images = [1058,108].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
