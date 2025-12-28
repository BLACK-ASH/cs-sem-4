import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../../services/register/register';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  registerForm = new FormGroup({
    firstName: new FormControl("", { nonNullable: true }),
    lastName: new FormControl("", { nonNullable: true }),
    email: new FormControl("", { nonNullable: true }),
    password: new FormControl("", { nonNullable: true })
  })

  registerService = inject(Register)

  handleSubmit() {
    this.registerService.register(this.registerForm.value).subscribe(res => {
      console.log(res)
      alert(res.message)
    })
    this.registerForm.reset()
  }
}
