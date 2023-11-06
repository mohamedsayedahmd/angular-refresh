import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent {
  constructor(public _shared: SharedService) {}
  hero = {
    name: '',
    power: 0,
    image: '',
  };

  ajout() {
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: '',
    };
    console.log(this._shared.heros);
  }
}
