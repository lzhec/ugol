import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
// import { UiModule } from "../ui/ui.module";
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { LeftMenuFacade } from '../../store/common-state/left-menu-state/left-menu.facade';

@NgModule({
  declarations: [LeftMenuComponent, MenuItemComponent],
  exports: [LeftMenuComponent],
  imports: [CommonModule, /*UiModule,*/ RouterModule],
  providers: [LeftMenuFacade],
})
export class LeftMenuModule {}
