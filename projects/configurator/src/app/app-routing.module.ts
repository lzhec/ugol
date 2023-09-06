import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from '../../../container/src/app/empty-route/empty-route.component';
import { MyFlatComponent } from './modules/my-flat-page/components/my-flat/my-flat.component';
import { ListOfWorksPageModule } from './modules/list-of-works-page/list-of-works-page.module';

const routes: Routes = [
  {
    path: 'flat',
    loadChildren: () =>
      import('./modules/my-flat-page/my-flat-page.module').then((m) => m.MyFlatPageModule),
  },
  {
    path: 'materials',
    loadChildren: () =>
      import('./modules/list-of-works-page/list-of-works-page.module').then(
        (m) => m.ListOfWorksPageModule,
      ),
  },
  // {
  //   path: '**',
  //   component: EmptyRouteComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
