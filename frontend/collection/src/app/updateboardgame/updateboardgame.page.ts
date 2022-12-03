import { Component, NgZone, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BoardgameService } from '../services/boardgame.service';

@Component({
  selector: 'app-updateboardgame',
  templateUrl: './updateboardgame.page.html',
  styleUrls: ['./updateboardgame.page.scss'],
})
export class UpdateboardgamePage implements OnInit {

  updateBoardgameFg: FormGroup;
  id: any;

  constructor(
    private boardgameService: BoardgameService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private zone: NgZone
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchBoardgame(this.id);
    this.updateBoardgameFg = this.formBuilder.group({
      name: [''],
      type: [''],
      company: [''],
      players: [''],
      description: [''],
      year: ['']

    })
  }

  fetchBoardgame(id){
    this.boardgameService.getBoardgame(id).subscribe((data) => {
      this.updateBoardgameFg.setValue({
        name: data['name'],
        type: data['type'],
        company: data['company'],
        players: data['players'],
        description: data['description'],
        year: data['year']
      });
    });
  }

  onSubmit() {
    if(!this.updateBoardgameFg.valid) {
      return false;
    } else {

      this.boardgameService.updateBoardgame(this.id, this.updateBoardgameFg.value).subscribe(
        (response) => {
        this.zone.run(()=> {
          this.updateBoardgameFg.reset();
          this.router.navigate(['/my-boardgames']);
        })

      });
    }
  }

}
