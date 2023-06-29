import { NgModule } from '@angular/core';

import { ExcelsyncRoutingModule } from './excelsync-routing.module';

import { ExcelsyncComponent } from './excelsync.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import { ActiveWatcherComponent } from './components/active-watcher/active-watcher.component';
import { WatcherInputComponent } from './components/watcher-input/watcher-input.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NgForOf} from "@angular/common";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSwitchModule} from "ng-zorro-antd/switch";


@NgModule({
  imports: [ExcelsyncRoutingModule, NzFormModule, ReactiveFormsModule, NzInputNumberModule, NzTableModule, NgForOf, NzDividerModule, NzSwitchModule, FormsModule],
  declarations: [ExcelsyncComponent, ActiveWatcherComponent, WatcherInputComponent],
  exports: [ExcelsyncComponent]
})
export class ExcelSyncModule { }
