import { Component } from '@angular/core';

enum actionType {
  repair = 1,
  level = 2,
  material = 3,
}

@Component({
  selector: 'configurator-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss'],
})
export class RepairComponent {
  public visible: boolean = false;
  public searchValue: string = '';
  public caption: string = 'Какой ремонт планируете делать?';
  public captionLevel: string = 'Уровень строителей';
  public captionMaterial: string = 'Уровень чистовых материалов';
  public repairTypeVisible: boolean = false;

  public animal: string = '';
  public name: string = '';

  constructor() {}

  dataChangeHandler(data: any) {
    this.repairTypeVisible = true;
  }
}
