import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../services/boardgame.service';


@Component({
  selector: 'app-my-boardgames',
  templateUrl: './my-boardgames.page.html',
  styleUrls: ['./my-boardgames.page.scss'],
})
export class MyBoardgamesPage implements OnInit {

  boardgame: any = [];

  constructor(private boardgameService: BoardgameService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.boardgameService.getBoardGames().subscribe((response) => {
      console.log('Boardgame read');
      
      this.boardgame = response;

      console.log(response)
    })
  }

  removeBoardgame(id: number) {
    if(window.confirm('Are you sure?')) {
      this.boardgameService.deleteBoardgame(id).subscribe(() =>  {
        this.ionViewDidEnter();
        console.log('Boardgame deleted!')
      })
    }
  }

}
