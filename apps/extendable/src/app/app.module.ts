import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appModuleRoutes } from '@core/routes/app-module.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, RouterModule.forRoot(appModuleRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
