import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Login} from '../../services/login/login';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    email: new FormControl("", {nonNullable: true}),
    password: new FormControl("", {nonNullable: true})
  }) 

  loginService = inject(Login)

   handleSubmit() {
    this.loginService.login(this.loginForm.value ).subscribe(res => {
      console.log(res);
      alert(res.message)
    })
    this.loginForm.reset()
  }
}
