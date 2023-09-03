import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { GridService } from './grid.service';

@NgModule({
  declarations: [GridComponent],
  imports: [],
  exports: [GridComponent],
  providers: [GridService],
})
export class GridModule {}
