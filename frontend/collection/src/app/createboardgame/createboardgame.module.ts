import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateboardgamePageRoutingModule } from './createboardgame-routing.module';

import { CreateboardgamePage } from './createboardgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateboardgamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateboardgamePage]
})
export class CreateboardgamePageModule {}
