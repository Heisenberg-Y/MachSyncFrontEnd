import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ExcelFileWatcher} from "../../../../interface/file-watcher.interface";
import {ConfigurationService} from "../../../../service/configuration/configuration.service";
import {Subscription} from "rxjs";




@Component({
  selector: 'app-active-watcher',
  templateUrl: './active-watcher.component.html',
  styleUrls: ['./active-watcher.component.css']
})
export class ActiveWatcherComponent implements OnInit, OnDestroy{
  @Input("fileWatchers")
  listOfData: ExcelFileWatcher[] = [
  ];

  sub: Subscription = new Subscription();

  constructor(private configurationService: ConfigurationService) {
  }
  ngOnInit() {

  }

  switch(data: ExcelFileWatcher, b: boolean) {
    console.log(data)
    data.activated = b
    this.sub.add(this.configurationService.updateConfiguration(data).subscribe())
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  clickDelete(data: ExcelFileWatcher) {
    this.sub.add(this.configurationService.deleteConfiguration(data).subscribe());
  }
}
