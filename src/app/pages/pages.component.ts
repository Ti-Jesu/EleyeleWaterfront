import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  arrayLength = 10;


  getArray(count: number) {
    return new Array(count)
  }
  constructor() { }

  ngOnInit(): void {
  }
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
 
  
 
}
