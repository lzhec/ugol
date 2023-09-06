import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { GridService } from './grid.service';
import { GridTileComponent } from './grid-tile.component';

@NgModule({
  declarations: [GridComponent, GridTileComponent],
  imports: [],
  exports: [GridComponent, GridTileComponent],
  providers: [GridService],
})
export class GridModule {}
