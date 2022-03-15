import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year? : number;

  constructor() { }

  ngOnInit(): void {
    this.year = this.getYear();
  }

  getYear() : number {
    let date = new Date();
    return date.getFullYear();
  }

}
