import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdmRoutingModule } from './rdm-routing.module';
import { RdmComponent } from './rdm.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RdmComponent],
  imports: [CommonModule, RdmRoutingModule, FormsModule, SharedModule],
})
export class RdmModule {}
