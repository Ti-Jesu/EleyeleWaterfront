import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.css']
})
export class RelaxComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
// customize default values of carousels used by this component tree
config.interval =0;
config.wrap = false;
config.keyboard = false;
config.pauseOnHover = true;
config.showNavigationArrows=false;

   }

  ngOnInit(): void {
  }
  images = [1059,129].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
