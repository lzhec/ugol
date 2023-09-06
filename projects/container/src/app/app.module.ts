import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpXsrfTokenExtractor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelModule } from './modules/navigation-panel/navigation-panel.module';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { CustomInterceptor } from './interceptors/custom-interceptor';
import { Configurator } from 'projects/configurator/src/app/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationPanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Configurator.forRoot(),
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
