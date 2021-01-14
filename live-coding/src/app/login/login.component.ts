import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentialsFormGroup!: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.credentialsFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('geheim', [Validators.required, Validators.minLength(6)])
    });

    this.credentialsFormGroup.valueChanges.subscribe(inputAsJsonObject => {
      console.log(inputAsJsonObject);
    });
  }

  public doLogIn(): void {
    const result: AbstractControl  = this.credentialsFormGroup.get('username') as AbstractControl;
    const username: string = result.value;

    const password = (this.credentialsFormGroup.get('username') as AbstractControl).value;

    this.loginService.login(username, password);
  }
}
