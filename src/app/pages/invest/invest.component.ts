import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  constructor(config:NgbCarouselConfig) { 

    config.showNavigationArrows=false;
    config.showNavigationIndicators=false;
    config.interval=0;
    config.wrap=false;
  }

  ngOnInit(): void {
  }
  images = [0].map((n) => `assets/invest/${n}.jpg`);
}
