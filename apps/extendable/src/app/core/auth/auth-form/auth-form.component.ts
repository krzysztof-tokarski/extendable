import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { environment } from '@environments/environment';

@Component({
  selector: 'extendable-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  // todo proper implementation
  protected form: FormGroup = this.createForm();

  constructor(private fb: NonNullableFormBuilder, private http: HttpClient) {}

  private createForm() {
    return this.fb.group({
      login: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  protected addUser() {
    this.http.post(`${environment.API_URL}/users`, this.form.value).subscribe();
  }
}
