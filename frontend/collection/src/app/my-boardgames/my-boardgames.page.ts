import { Component, OnInit } from '@angular/core';
import { Boardgame, BoardgameService } from '../services/boardgame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-boardgames',
  templateUrl: './my-boardgames.page.html',
  styleUrls: ['./my-boardgames.page.scss'],
})
export class MyBoardgamesPage implements OnInit {

  boardgame: any = [];

  constructor(private boardgameService: BoardgameService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.boardgameService.getBoardGames().subscribe((response) => {
      console.log('Boardgame read');
      console.log(response);
      this.boardgame = response;
    })
  }

  removeBoardgame(boardgame, _id) {
    if(window.confirm('Are you sure?')) {
      this.boardgameService.deleteBoardgame(boardgame.id).subscribe(() =>  {
        this.ionViewDidEnter();
        console.log('Boardgame deleted!')
      })
    }
  }

}
