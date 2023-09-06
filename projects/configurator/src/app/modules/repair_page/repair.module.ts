import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RepairComponent } from './component/repair/repair.component';
import { SelectRepairTypeComponent } from './component/select_repair-type/select-repair-type.component';
import { SelectRepairTypeDialog } from './component/select-repair-type-dialog/select-repair-type-dialog.component';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: RepairComponent,
  },
];
@NgModule({
  declarations: [RepairComponent, SelectRepairTypeComponent],
  imports: [
    SelectRepairTypeDialog,
    CommonModule,
    RouterModule.forChild(routes),
    DialogModule,
    FormsModule,
    MatButtonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    UiModule,
  ],
})
export class RepairModule {}
