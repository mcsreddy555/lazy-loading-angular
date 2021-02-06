import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {
  public var_three:string;

  constructor() {
    this.var_three="page three !!!"
   }

  ngOnInit(): void {
  }

}
