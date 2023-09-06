import { Component } from '@angular/core';

@Component({
  selector: 'configurator-list-of-works',
  templateUrl: './list-of-works.component.html',
  styleUrls: ['./list-of-works.component.scss'],
})
export class ListOfWorksComponent {
  public amountWorks$: any;
  public amountWalls$: any;
  public options$: any;
}
