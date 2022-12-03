import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-boardgames',
    loadChildren: () => import('./my-boardgames/my-boardgames.module').then( m => m.MyBoardgamesPageModule)
  },
  {
    path: 'createboardgame',
    loadChildren: () => import('./createboardgame/createboardgame.module').then( m => m.CreateboardgamePageModule)
  },
  {
    path: 'updateboardgame/:id',
    loadChildren: () => import('./updateboardgame/updateboardgame.module').then( m => m.UpdateboardgamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
