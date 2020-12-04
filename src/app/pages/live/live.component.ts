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
   }

  ngOnInit(): void {
  }
  images = [106,1068].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
