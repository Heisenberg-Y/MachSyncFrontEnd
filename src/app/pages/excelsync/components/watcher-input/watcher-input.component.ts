import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExcelFileWatcher} from "../../../../interface/file-watcher.interface";

@Component({
  selector: 'app-watcher-input',
  templateUrl: './watcher-input.component.html',
  styleUrls: ['./watcher-input.component.css']
})
export class WatcherInputComponent {
  validateForm!: FormGroup;

  @Output("submitForm")
  fileWatchers: EventEmitter<ExcelFileWatcher> = new EventEmitter<ExcelFileWatcher>()
  constructor(private formGroup: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.formGroup.group({
      configurationName: [null, [Validators.required]],
      filePath: [null, [Validators.required]],
      dataSheetNum: [null, [Validators.required]],
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.fileWatchers.emit({
      filePath: this.validateForm.value.filePath,
      dataSheetNum: this.validateForm.value.dataSheetNum,
      configurationName: this.validateForm.value.configurationName,
      activated: false
    })
  }
}
