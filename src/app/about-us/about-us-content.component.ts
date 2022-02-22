import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameModel } from '../model/game.model';
import { OperatorModel } from '../model/operator.model';

@Component({
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.scss']
})
export class AboutUsContentComponent implements OnInit {
  form = {
    data: {
      gameList: [] as GameModel[],
      operatorList: [] as OperatorModel[],
    },
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form.data.gameList = this.activatedRoute.snapshot.data['gameList'];
    this.form.data.operatorList = this.activatedRoute.snapshot.data['operatorList'];
  }
}
