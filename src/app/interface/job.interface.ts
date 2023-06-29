import {ExcelFileWatcher} from "./file-watcher.interface";

type status = 'success' | 'fail' | 'fetched' | 'pending'
export interface Job {
  id: number;
  job_type: string;
  created_time: string;

  configuration: ExcelFileWatcher
  status: status
  completed_time: string;
}
