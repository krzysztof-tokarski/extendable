import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './errors/http-error.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { userReducer } from '../store/user/user.reducer';
import { AuthService } from './auth/services/auth.service';
import { authReducer } from '../store/auth/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot<AppState>({
      user: userReducer,
      auth: authReducer,
    }),
  ],
  providers: [
    ToastrService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    // TODO provide proper callback?
    { provide: APP_INITIALIZER, useFactory: () => {}, deps: [AuthService] },
  ],
})
export class CoreModule {}
