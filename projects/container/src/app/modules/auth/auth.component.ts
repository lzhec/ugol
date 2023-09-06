import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';

export interface UserLogin {
  from: string;
  password: string;
  type: string;
  username: string;
}

export type FormGroupByType<D> = {
  [K in keyof D]: FormControl<D[K]>;
};

@Component({
  selector: 'container-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public form = new FormGroup<FormGroupByType<Partial<UserLogin>>>({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthenticationService) {}

  public login(): void {
    const formData = {
      ...this.form.value,
      from: 'market',
      type: 'market',
    } as UserLogin;

    this.authService.loginByUsername(formData).subscribe((res) => console.log(res));
  }
}
