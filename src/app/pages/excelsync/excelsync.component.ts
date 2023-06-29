import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {ExcelFileWatcher} from "../../interface/file-watcher.interface";
import {ConfigurationService} from "../../service/configuration/configuration.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-excelsync',
  templateUrl: './excelsync.component.html',
  styleUrls: ['./excelsync.component.css']
})
export class ExcelsyncComponent implements OnInit {
  validateForm!: FormGroup;

  fileWatchers: ExcelFileWatcher[] = []
  constructor(private configurationService: ConfigurationService) { }
  sub: Subscription = new Subscription();
  ngOnInit() {
    this.sub.add(this.configurationService.conf$.subscribe((data) => {
      console.log(`get data`, data)
      this.fileWatchers = data;
    }));
    this.sub.add(this.configurationService.getConfiguration().subscribe((data) => {

    }))
  }

  onSubmit(fileWatcher: ExcelFileWatcher): void {
    this.sub.add(this.configurationService.addConfiguration(fileWatcher).subscribe((data) => {
      console.log(data)
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
