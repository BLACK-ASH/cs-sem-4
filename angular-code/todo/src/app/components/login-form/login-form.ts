import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  handleSubmit() {
    console.log(this.loginForm.value);
    alert(`Hey ${this.loginForm.value.firstName}, Your Is Form Submitted Successfully, Details In Console`)
    this.loginForm.reset()
  }
}
