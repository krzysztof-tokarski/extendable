import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppRoute } from '@core/routes/app-route.enum';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AppState } from '../../store/app.state';

// TODO temp solution, figure out why commented code in AuthGuard isnt working
@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  public canActivate() {
    return this.store.select('auth').pipe(
      map((state) => !state.isAuth),
      tap((isNotLoggedIn) => {
        if (isNotLoggedIn) {
          return;
        } else {
          this.router.navigateByUrl(AppRoute.APP);
        }
      })
    );
  }
}
