import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';
import { SvgService } from './svg.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgComponent],
  exports: [SvgComponent],
  providers: [SvgService],
})
export class SvgModule {}
