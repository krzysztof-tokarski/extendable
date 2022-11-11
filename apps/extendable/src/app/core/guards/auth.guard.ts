import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppRoute } from '@core/routes/app-route.enum';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AppState } from '../../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  public canActivate() {
    return this.store.select('auth').pipe(
      map((state) => state.isAuth),
      tap((isAuth) => {
        if (isAuth) {
          return;
        } else {
          this.router.navigateByUrl(AppRoute.AUTH_SIGN_IN);
        }
      })
    );
  }
}

// const isAuth$ = this.store
//   .select('auth')
//   .pipe(map((state) => state.isAuth));

// const navEnd$ = this.router.events.pipe(
//   filter((e) => e instanceof NavigationEnd)
// );

// return combineLatest([isAuth$, navEnd$]).pipe(
//   map(([isAuth, navEnd]) => {
//     const urlAfterRedirects = (navEnd as NavigationEnd).urlAfterRedirects;
//     const entersAuthRoute = RoutesMap.AUTH.test(urlAfterRedirects);

//     if (isAuth && entersAuthRoute) {
//       this.router.navigateByUrl(AppRoute.APP);
//       return false;
//     }

//     if (isAuth) {
//       return true;
//     } else {
//       this.router.navigateByUrl(AppRoute.AUTH_SIGN_IN);
//       return false;
//     }
//   }),
//   map(Boolean)
