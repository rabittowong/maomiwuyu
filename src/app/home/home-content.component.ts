import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameModel } from '../model/game.model';
import { GameRegistrationModel } from '../model/game-registration.model';
import { GameRegistrationService } from '../service/game-registration.service';

@Component({
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  form = {
    data: {
      gameRegistration: new GameRegistrationModel() as GameRegistrationModel,
    },
    ui: {
      proceeded: false as boolean,
      submitted: false as boolean,
    },
    options: {
      gameList: [] as GameModel[],
    },
  };

  constructor(private activatedRoute: ActivatedRoute,
              private gameRegistrationService: GameRegistrationService) {
  }

  onProceed(isValid: boolean): void {
    this.form.ui.proceeded = true;
    if (isValid) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    this.gameRegistrationService.create(this.form.data.gameRegistration).subscribe(() => {
      this.form.ui.submitted = true;
    });
  }

  ngOnInit(): void {
    this.form.options.gameList = this.activatedRoute.snapshot.data['gameList'];
    this.form.data.gameRegistration.gameId = this.form.options.gameList[0]?.id;
  }
}
