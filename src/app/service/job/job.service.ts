import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../../interface/job.interface";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = 'http://localhost:8080';
  private jobs: Job[] = []
  private jobBehavior = new BehaviorSubject<Job[]>(this.jobs);
  readonly jobs$ = this.jobBehavior.asObservable();
  constructor(private http: HttpClient) { }

  listJobs$() {
    return this.http.get<Job[]>(`${this.url}/api/job`).pipe(
      tap((data) => {
        this.jobs = data;
        this.jobBehavior.next(this.jobs);
      }
    ))
  }

  refresh$() {
    return this.http.get<Job[]>(`${this.url}/api/job`).pipe(
      tap((data) => {
        this.jobs = data;
        this.jobBehavior.next(this.jobs);
        console.log("called refresh", data)
      }
    ))
  }
}
