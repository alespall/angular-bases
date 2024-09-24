import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="incrementa(+1)">+1</button>
    <button (click)="incrementa(-1)">-1</button>
    <button (click)="reset()">RESET</button>

  `
})
export class CounterComponet{
  public counter: number=10;

  public incrementa(value:number):void{
    this.counter=this.counter+value;

  }
  reset(){
    this.counter=10;
  }
}
