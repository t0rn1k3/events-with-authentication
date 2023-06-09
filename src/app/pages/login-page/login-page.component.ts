import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,  Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router
  ){}
  public loginForm = this.formBuilder.group({
    email : ["", [Validators.required]],
    password : ["", [Validators.required]]
  })


  submitted = false;


  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    const logForm = this.loginForm.value;
    const user = {
      email : logForm.email!,
      password : logForm.password!
    }

    this.auth.loginUser(user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
}
