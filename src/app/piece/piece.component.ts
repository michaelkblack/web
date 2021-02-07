import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COLORS } from '../color';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent {
  piece: string;
  colors = COLORS;
  name: string;
  email: string;
  bgColor: string;
  frameColor: string;
  gradient: boolean;

  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router) {
    this._route.data.subscribe(params => this.piece = params.piece);
  }

  order() {
    console.log('name', this.name);
    console.log('bgColor', this.bgColor);
    console.log('frameColor', this.frameColor);
    console.log('gradient', this.gradient);
    this._http.post('https://formspree.io/f/xvovyvdk', {
      piece: this.piece,
      name: this.name,
      email: this.email,
      frameColor: this.frameColor,
      bgColor: this.bgColor
    })
    .pipe(catchError(() => this._router.navigateByUrl('error')))
    .subscribe(res => {
      console.log('res', res);
      if (res['ok']) {
        this._router.navigateByUrl('ok');
      } else {
        this._router.navigateByUrl('error');
      }
    });
  }
}