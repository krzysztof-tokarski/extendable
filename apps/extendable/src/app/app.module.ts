import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fundamentalRoutes } from '@core/routing/fundamental-routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, RouterModule.forRoot(fundamentalRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
