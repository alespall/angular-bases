import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> =new EventEmitter();

  public character: Character={
    name:'',
    power:0
  }
  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length===0) return;

    this.onNewCharacter.emit(this.character);

    //una sola lectura para que sea mas eficiente
    this.character={name:'', power:0};
    // this.character.name='';
    // this.character.power=0;
  }
}
