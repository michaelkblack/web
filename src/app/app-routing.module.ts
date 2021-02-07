import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PIECES } from './pieces';
import { PieceComponent } from './piece/piece.component';
import { PiecesComponent } from './pieces/pieces.component';
import { OkComponent } from './ok/ok.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PiecesComponent },
  { path: 'ok', component: OkComponent },
  { path: 'error', component: ErrorComponent }
];

PIECES.forEach(piece => {
  routes.push({ path: piece, component: PieceComponent, data: { piece: piece }});
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }