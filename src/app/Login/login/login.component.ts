import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  router = inject(Router);

  usernameControl!: FormControl;
  passwordControl!: FormControl;
  form!: FormGroup;

  ngOnInit() {
    this.usernameControl = new FormControl('', [
      Validators.required
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required
    ]);

    this.form = new FormGroup({
      user: this.usernameControl,
      pass: this.passwordControl
    })
  }

  onSubmit() {

  }

  onForgot() {

  }

  onCreateAccount() {

  }
}
