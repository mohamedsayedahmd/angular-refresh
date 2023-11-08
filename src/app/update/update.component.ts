import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(private act: ActivatedRoute, public _shared: SharedService) {}
  // activated route : to extract the params from the url
  hero: any;
  id: any;
  update() {
    // this._shared.getById()
  }
  ngOnInit() {
    this.id = this.act.snapshot.paramMap.get('id'); // app-routing.module.ts update/<:id>
    // console.log(this.id);
    this._shared.getHeroById(this.id).subscribe(
      (res) => {
        this.hero = res;
      },
      (err) => {
        console.log(err);
      }
    );
    // /getbyid/:id
    // /update/:id
  }
}
