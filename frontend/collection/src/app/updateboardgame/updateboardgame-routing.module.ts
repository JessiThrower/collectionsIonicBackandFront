import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateboardgamePage } from './updateboardgame.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateboardgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateboardgamePageRoutingModule {}
