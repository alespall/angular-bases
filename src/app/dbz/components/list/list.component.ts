import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output() onDelete: EventEmitter<string>=new EventEmitter();
  @Input()
  public characterList: Character[]=[
    {
      name:'Trunk',
      power:10
    }
  ]

  //pongo el ? porque sino no me deja pasarlo como argumento en el html
  onDeleteCharacter(id?:string):void{
    //para no llamar el emiter con un un id vacio.
    if(!id) return;
    //console.log({id})
    this.onDelete.emit(id);
  }
}
