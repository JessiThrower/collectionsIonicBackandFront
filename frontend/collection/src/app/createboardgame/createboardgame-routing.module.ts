import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateboardgamePage } from './createboardgame.page';

const routes: Routes = [
  {
    path: '',
    component: CreateboardgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateboardgamePageRoutingModule {}
