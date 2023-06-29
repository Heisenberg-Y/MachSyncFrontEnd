import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExcelFileWatcher} from "../../interface/file-watcher.interface";
import {BehaviorSubject, catchError, filter, map, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private url = 'http://localhost:8080';
  private configuration: ExcelFileWatcher[] = [];
  private confBehavior = new BehaviorSubject<ExcelFileWatcher[]>(this.configuration);
  readonly conf$ = this.confBehavior.asObservable();
  constructor(private http: HttpClient) { }

  addConfiguration(configuration: ExcelFileWatcher): Observable<boolean> {
    return this.http.post<ExcelFileWatcher[]>(`${this.url}/api/config/excel`, configuration).pipe(
      tap((data) => {
        this.configuration = data
        this.confBehavior.next(this.configuration);
      }),
      map((data) => true),

    )
  }

  getConfiguration(): Observable<ExcelFileWatcher[]> {
    return this.http.get<ExcelFileWatcher[]>(`${this.url}/api/config/excel`).pipe(
      tap((data) => {
        this.configuration = data;
        this.confBehavior.next(this.configuration);
      }),
      switchMap((data) => this.conf$)
    )
  }

  updateConfiguration(configuration: ExcelFileWatcher): Observable<boolean> {
    return this.http.put<ExcelFileWatcher[]>(`${this.url}/api/config/excel`, configuration).pipe(
      tap((data) => {
        this.configuration = data
        this.confBehavior.next(this.configuration);
      }),
      map((data) => true),
    )
  }

  deleteConfiguration(conf: ExcelFileWatcher): Observable<boolean> {
    return this.http.put<ExcelFileWatcher[]>(`${this.url}/api/config/excel/${conf.configurationName}`, conf).pipe(
      tap((data) => {
        this.configuration = data
        this.confBehavior.next(this.configuration);
      }),
      map((data) => true),
    )
  }
}
