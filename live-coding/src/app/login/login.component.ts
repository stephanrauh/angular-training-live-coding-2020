import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string | undefined;

  public password: string | undefined;

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  public doLogIn(): void {
    this.loginService.login(this.username, this.password);
  }
}
