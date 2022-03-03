import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  secondNumber = 0;
  result : any ;
  operation: string="";

  constructor() { }

  ngOnInit(): void {
  }

  calculator()  {

    switch (this.operation) {
      case "+":
        this.result= this.firstNumber + this.secondNumber;
        break;
      case  "-":
        this.result= this.firstNumber - this.secondNumber;
        break;
      case  "*":
        this.result= this.firstNumber * this.secondNumber;
        break;
      case "/":
        if (this.firstNumber==0){
          throw new Error("error")
        }else {
          this.result= this.firstNumber / this.secondNumber;
        }
    }
  }
}
