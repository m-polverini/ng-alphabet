import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdmComponent } from './rdm.component';

const routes: Routes = [{ path: '', component: RdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdmRoutingModule { }
