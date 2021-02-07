import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
    constructor(private _router: Router) { }

    return() {
        this._router.navigateByUrl('');
    }
}