import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateboardgamePageRoutingModule } from './updateboardgame-routing.module';

import { UpdateboardgamePage } from './updateboardgame.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateboardgamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateboardgamePage]
})
export class UpdateboardgamePageModule {}
