import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'giftly-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  isUserLoggedIn = false;
  constructor(public readonly sessionService: SessionService) {
  }

  ngOnInit() {
      this.sessionService.isloggedIn.subscribe((isUserLoggedInData: boolean) => {
          this.isUserLoggedIn = isUserLoggedInData;
      });
  }

}
