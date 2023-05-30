import { Component , OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router
  ){}


  public registerForm = this.formBuilder.group({
    email: ['', [Validators.required,]],
    password: ['', [Validators.required,]],
  })


  submitted = false

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true
    if (this.registerForm.invalid) {
      return;
    }
    const regForm = this.registerForm.value
    const user = {
      email :  regForm.email,
      password : regForm.password
    }

    this.auth.registerUser(user)
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
