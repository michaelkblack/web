import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OkComponent {
  constructor(private _router: Router) { }

  return() {
    this._router.navigateByUrl('');
  }
}