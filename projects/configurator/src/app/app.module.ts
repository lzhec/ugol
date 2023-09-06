import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuModule } from './modules/left-menu/left-menu.module';
// import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { CommonState } from './store/global.state';
import { LeftMenuState } from './store/common-state/left-menu-state/left-menu.state';
import { ApiService } from 'projects/configurator/src/app/services/api/api.service';
// import { ConfiguratorInterceptor } from "./interceptor/interceptor.service";
import { GridModule } from 'projects/grid/src/lib/grid.module';

@NgModule({
  declarations: [AppComponent /*EmptyRouteComponent*/],
  providers: [
    ApiService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ConfiguratorInterceptor,
    //   multi: true,
    // },
  ],
  exports: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DialogModule,
    OverlayPanelModule,
    NgxsModule.forRoot([CommonState, LeftMenuState]),
    GridModule,
  ],
})
export class AppModule {}

@NgModule({})
export class Configurator {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}
