import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateboardgamePageRoutingModule } from './updateboardgame-routing.module';

import { UpdateboardgamePage } from './updateboardgame.page';

import { ReactiveFormsModule } from '@angular/forms';

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
