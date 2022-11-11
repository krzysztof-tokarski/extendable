import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndpoints } from '@core/api/api-endpoints';
import { AppRoute } from '@core/routes/app-route.enum';
import { environment } from '@environments/environment';
import { FacadeToastrService } from '@shared/feedback/facade-toastr.service';
import { AuthFormValue } from '../models/auth-form-value';
import { tap } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { SignInResponse } from '@models/users/sign-in-response.model';
import { USER_ACTIONS } from '../../../store/user/user.actions';
import { AUTH_ACTIONS } from '../../../store/auth/auth.actions';
import { User } from '@shared/models/users/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private toastr: FacadeToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.setAuthStateOnAppInit();
  }

  private setAuthStateOnAppInit() {
    const storageUserItem = sessionStorage.getItem('user');
    if (!storageUserItem) return this.signOut();

    const userFromStorage = JSON.parse(storageUserItem);
    this.setStateAfterAuth(userFromStorage);
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
          const { user } = signInResponse;
          sessionStorage.setItem('user', JSON.stringify(user));
          this.setStateAfterAuth(user);
        },
      });
  }

  public signOut() {
    this.store.dispatch(USER_ACTIONS.SIGN_OUT());
    this.store.dispatch(AUTH_ACTIONS.SET_UNAUTH());
    this.router.navigateByUrl(AppRoute.AUTH_SIGN_IN);
    sessionStorage.removeItem('user');
  }

  private setStateAfterAuth(user: User) {
    this.store.dispatch(USER_ACTIONS.SIGN_IN({ user }));
    this.store.dispatch(AUTH_ACTIONS.SET_AUTH());
  }
}
