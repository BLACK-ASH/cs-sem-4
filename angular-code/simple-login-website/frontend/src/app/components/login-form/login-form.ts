import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../services/login/login';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  errorMessage = signal('');

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
  loginService = inject(Login);

  handleSubmit() {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (data) => {
        // Success response
        console.log(data);
        alert(data.message);
      },
      error: (err) => {
        // Error response
        console.log(err);
        this.errorMessage.set(err.error.message);
      },
    });
  }
}
