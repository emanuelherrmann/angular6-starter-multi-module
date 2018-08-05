import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testeable',
  templateUrl: './testeable.component.html',
  styleUrls: ['./testeable.component.scss']
})
export class TesteableComponent implements OnInit {

  ch1: Boolean ;
  ch2: Boolean ;
  ch3: Boolean ;
  ch4: Boolean ;


  constructor() { 
    this.ch1 = false;
    this.ch2 = false;
    this.ch3 = false;
    this.ch4 = false;
  }

  logValues() {
    console.log(this.ch1,this.ch2,this.ch3,this.ch4);
  }

  checkCondition() {
    return this.ch1 && this.ch2 && this.ch3 && this.ch4;
  }

  ngOnInit() {
  }

}
