import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valor: any = '';
  value1: number = 0;
  value2: number = 0;
  opr: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  button(value: any){
    console.log(value)
    this.valor += value;
    console.log(this.valor)
    document.getElementById("visor")?.setAttribute("value", this.valor);
  }
  reset(){
    document.getElementById("visor")?.setAttribute("value", '');
    this.value1 = 0;
    this.value2 = 0;
    this.valor = '';
  }
  result(){
    if(this.value1 && this.opr !== ''){
      this.value2 = parseFloat(this.valor)
    }
    this.valorFinal()
    document.getElementById("visor")?.setAttribute("value", this.valor);
    this.opr = '';

  }

  operation(opr: string){
    this.value1 = parseFloat(this.valor);
    if(this.value1){
      this.opr = opr
    }
    this.valor = '';
  }

  valorFinal(){
    switch (this.opr) {
      case '/':
        this.valor = this.value1 / this.value2;
            this.opr = '';

        break;
      case '+':
        this.valor = this.value1 + this.value2;
            this.opr = '';

        break;
      case '*':
        this.valor = this.value1 * this.value2;
            this.opr = '';

        break;
      case '-':
        this.valor = this.value1 - this.value2;
            this.opr = '';

        break;
    
      default:
        break;
    }
  }

}
