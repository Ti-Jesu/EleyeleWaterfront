import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
    config.showNavigationArrows=false;
    config.interval=0;
    config.wrap=false;
   }

  ngOnInit(): void {
  }
  images = [1076,1067].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
