import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [0,1,2,3].map((n) => `assets/carousel/${n}.jpg`);
  text=["Eleyele Waterfront","Join a growing commuinity","a place to invest","eleyele"]

  
}
