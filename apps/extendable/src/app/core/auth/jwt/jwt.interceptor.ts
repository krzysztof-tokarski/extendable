import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {
  combineLatest,
  first,
  flatMap,
  map,
  mergeMap,
  Observable,
  of,
  take,
  tap,
  withLatestFrom,
} from 'rxjs';
import { AppState } from '@store/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return this.store.select('auth').pipe(
      first(),
      map((authState) => authState.jwt),
      mergeMap((jwt) => {
        const authReq = jwt
          ? request.clone({
              setHeaders: { Authorization: 'Bearer ' + jwt },
            })
          : request;
        return next.handle(authReq);
      })
    );
  }
}
