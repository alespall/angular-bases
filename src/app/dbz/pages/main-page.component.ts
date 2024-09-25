import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService){}

  //Como los objetos se pasan por referencias asi evitamos que se puedan hacer modificaciones en el objeto original
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character):void{
    return this.dbzService.addCharacter(character);
  }
}
