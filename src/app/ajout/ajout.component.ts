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
    // subscribe - read the response
    this._shared.createNewHero(this.hero).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this._shared);
  }
}
