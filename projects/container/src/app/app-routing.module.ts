import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { APP_BASE_HREF } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppComponent } from 'projects/configurator/src/app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empty',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: async () => (await import('./modules/auth/auth.module')).AuthModule,
  },
  {
    path: 'configurator',
    loadChildren: async () =>
      (await import('projects/configurator/src/app/app.module')).Configurator,
    component: AppComponent,
  },
  {
    path: 'configurator/flat',
    loadChildren: async () =>
      (await import('projects/configurator/src/app/modules/my-flat-page/my-flat-page.module'))
        .MyFlatPageModule,
  },
  {
    path: '',
    component: EmptyRouteComponent,
    children: [
      {
        path: 'empty',
        loadChildren: async () =>
          (await import('./modules/empty-route/empty-route.module')).EmptyRouteModule,
        canLoad: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
