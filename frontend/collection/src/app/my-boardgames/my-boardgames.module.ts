import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBoardgamesPageRoutingModule } from './my-boardgames-routing.module';

import { MyBoardgamesPage } from './my-boardgames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBoardgamesPageRoutingModule
  ],
  declarations: [MyBoardgamesPage]
})
export class MyBoardgamesPageModule {}
