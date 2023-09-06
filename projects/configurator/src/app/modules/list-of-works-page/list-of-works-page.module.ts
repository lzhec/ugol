import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ListOfWorksComponent } from './components/list-of-works/list-of-works.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfWorksComponent,
  },
];

@NgModule({
  declarations: [ListOfWorksComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TabViewModule],
})
export class ListOfWorksPageModule {}
