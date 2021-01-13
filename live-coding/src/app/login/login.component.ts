import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  public doLogIn(): void {
    this.loginService.isLoggedIn = true;
    this.router.navigateByUrl("/start");
  }
}
