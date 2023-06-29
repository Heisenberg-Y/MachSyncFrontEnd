import { NgModule } from '@angular/core';

import { JobRoutingModule } from './job-routing.module';

import { JobComponent } from './job.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NgForOf} from "@angular/common";


@NgModule({
  imports: [JobRoutingModule, NzTableModule, NgForOf],
  declarations: [JobComponent],
  exports: [JobComponent]
})
export class JobModule { }
