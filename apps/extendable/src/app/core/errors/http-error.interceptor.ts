import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FacadeToastrService } from '@shared/feedback/facade-toastr.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: FacadeToastrService) {}

  // TODO proper implementation
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone()).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          this.toastr.displayHttpErrorToast(error);
        },
      })
    );
  }
}
