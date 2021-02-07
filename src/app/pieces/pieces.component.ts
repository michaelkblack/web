import { Component } from '@angular/core';
import { PIECES } from '../pieces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent {
  pieces = PIECES;

  constructor(private _router: Router) { }

  go(piece) {
    this._router.navigateByUrl(piece);
  }
}