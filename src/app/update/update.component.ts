import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private act: ActivatedRoute,
    public _shared: SharedService,
    private router: Router
  ) {}
  // activated route : to extract the params from the url
  hero: any;
  id: any;
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
  update() {
    this._shared.updateHero(this.id, this.hero).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/list']); // navigate to list page after update
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
