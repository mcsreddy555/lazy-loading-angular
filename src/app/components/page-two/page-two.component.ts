import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  public var_two:string;
  constructor() { 
    this.var_two="page two..................!!!!!!!!!"
  }

  ngOnInit(): void {
  }

}
