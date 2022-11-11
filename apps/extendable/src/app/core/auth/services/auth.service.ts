import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndpoints } from '@core/api/api-endpoints';
import { AppRoute } from '@core/routes/app-route.enum';
import { environment } from '@environments/environment';
import { FacadeToastrService } from '@shared/feedback/facade-toastr.service';
import { AuthFormValue } from '../models/auth-form-value';
import { tap } from 'rxjs';
import { AppState } from '@store/app.state';
import { Store } from '@ngrx/store';
import { SignInResponse } from '@models/users/sign-in-response.model';
import { USER_ACTIONS } from '@store/user/user.actions';
import { AUTH_ACTIONS } from '@store/auth/auth.actions';
import { User } from '@shared/models/users/user.model';
import TypedLocalStore from 'typed-local-store';
import { SessionStorageSchema } from '@store/session-storage.schema';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // TODO place sessionStorage actions inside ngrx?
  private sessionStorage = new TypedLocalStore<SessionStorageSchema>({
    storage: 'sessionStorage',
  });

  constructor(
    private http: HttpClient,
    private toastr: FacadeToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.setAuthStateOnAppInit();
  }

  private setAuthStateOnAppInit() {
    const userFromStorage = this.sessionStorage.getItem('user');
    const tokenFromStorage = this.sessionStorage.getItem('jwt');

    if (!userFromStorage || !tokenFromStorage) return this.signOut();

    this.setStateAfterAuth(userFromStorage, tokenFromStorage);
  }

  public signIn(authFormValue: AuthFormValue) {
    this.http
      .post<SignInResponse>(
        `${environment.API_URL}/${ApiEndpoints.AUTH_LOGIN}`,
        authFormValue
      )
      .pipe(
        tap({
          next: () => {
            this.toastr.displaySuccessToast('Signed in successfully!');
            this.router.navigateByUrl(AppRoute.APP_TODAY);
          },
        })
      )
      .subscribe({
        next: (signInResponse) => {
          const { user, jwt } = signInResponse;

          this.sessionStorage.setItem('user', user);
          this.sessionStorage.setItem('jwt', jwt);

          this.setStateAfterAuth(user, jwt);
        },
      });
  }

  public signOut() {
    this.store.dispatch(USER_ACTIONS.SIGN_OUT());
    this.store.dispatch(AUTH_ACTIONS.SET_UNAUTH());

    this.sessionStorage.removeItem('user');
    this.sessionStorage.removeItem('jwt');

    this.router.navigateByUrl(AppRoute.AUTH_SIGN_IN);
  }

  private setStateAfterAuth(user: User, jwt: string) {
    this.store.dispatch(USER_ACTIONS.SIGN_IN({ user }));
    this.store.dispatch(AUTH_ACTIONS.SET_AUTH({ jwt }));
  }
}
