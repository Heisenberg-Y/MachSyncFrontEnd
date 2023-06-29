import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelsyncComponent } from './excelsync.component';

const routes: Routes = [
  { path: '', component: ExcelsyncComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelsyncRoutingModule { }
