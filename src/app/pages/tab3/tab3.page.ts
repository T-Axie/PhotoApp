import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private authService: AuthenticationService) {}
  async logout() {
    await  this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }
}