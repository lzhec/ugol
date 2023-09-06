import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { GridModule } from 'projects/grid/src/lib/grid.module';
import { SvgModule } from 'projects/ui/src/lib/svg/svg.module';

@NgModule({
  declarations: [NavigationPanelComponent, AccountNavComponent],
  exports: [NavigationPanelComponent],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    MatMenuModule,
    RouterLinkActive,
    GridModule,
    SvgModule,
    OverlayPanelModule,
  ],
})
export class NavigationPanelModule {}
