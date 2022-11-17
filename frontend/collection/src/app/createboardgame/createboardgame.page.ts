import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardgameService } from '../services/boardgame.service';

@Component({
  selector: 'app-createboardgame',
  templateUrl: './createboardgame.page.html',
  styleUrls: ['./createboardgame.page.scss'],
})
export class CreateboardgamePage implements OnInit {

  boardgameForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private boardgameService: BoardgameService
  ) { 
    this.boardgameForm = this.formBuilder.group({
      name: [''],
      type: [''],
      company: [''],
      players: [''],
      description: [''],
      year: ['']
    })
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.boardgameForm.valid) {
      return false;
    } else {
      this.boardgameService.createBoardgame(this.boardgameForm.value).subscribe(
        (response) => {
          this.zone.run(() => {
            this.boardgameForm.reset();
            this.router.navigate(['/my-boardgames']);
          })
        });
    }
  }

}
