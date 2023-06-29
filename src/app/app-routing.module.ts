import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/excelSync' },
  { path: 'excelSync', loadChildren: () => import('./pages/excelsync/excelsync.module').then(m => m.ExcelSyncModule) },
  { path: 'jobs', loadChildren: () => import('./pages/job/job.module').then(m => m.JobModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
