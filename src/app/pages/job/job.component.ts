import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Job} from "../../interface/job.interface";
import {JobService} from "../../service/job/job.service";
import {interval, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs : Job[] = []
  sub: Subscription = new Subscription();
  constructor(private jobService: JobService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.sub.add(this.jobService.jobs$.subscribe((data) => {

      this.jobs = data;
    }))
    this.sub.add(interval(10000).pipe(switchMap(_ => this.jobService.refresh$())).subscribe(()=> {
      }
    ))
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
