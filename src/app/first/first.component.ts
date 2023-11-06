import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  hero = {
    name: '',
    power: 0,
    image: '',
  };

  heros: any[] = [];

  constructor() {}
  ngOnInit() {}

  ajout() {
    this.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: '',
    };
    console.log(this.heros);
  }
}
