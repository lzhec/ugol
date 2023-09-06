import { Component } from '@angular/core';

@Component({
  selector: 'container-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss'],
})
export class AccountNavComponent {
  public showMenu = false;
  public accLogoURL = null;

  public toggleAccountNav(): void {
    this.showMenu = !this.showMenu;
  }

  protected readonly assetUrl = null;
}
