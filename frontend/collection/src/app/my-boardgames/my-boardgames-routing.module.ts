import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBoardgamesPage } from './my-boardgames.page';

const routes: Routes = [
  {
    path: '',
    component: MyBoardgamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBoardgamesPageRoutingModule {}
