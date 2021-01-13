import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn = false;

  public targetUrl!: string;

  constructor(private router: Router) { }

  public login(username: string | undefined, password: string | undefined): void {
    // todo: login to keycloak and check if the user has the role giving them access to the target page
    if (username?.length && password?.length) {
      this.isLoggedIn = true;
      this.router.navigateByUrl(this.targetUrl);
    }
  }
}
