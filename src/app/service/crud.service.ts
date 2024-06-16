import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceUrl : string;

  constructor(private http : HttpClient) { 
    this.serviceUrl = "https://json-deployement.onrender.com/tasks";
  }

  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.serviceUrl, task);
  }
  
  getAllTasks() : Observable<Task[]>{
    const timestamp = new Date().getTime();
    const url = `${this.serviceUrl}?timestamp=${timestamp}`;
    return this.http.get<Task[]>(url);
  }

  deleteTask(task : Task) : Observable<Task>{
    return this.http.delete<Task>(this.serviceUrl + '/' + task.id);
  }

  editTask(task : Task) : Observable<Task>{
    return this.http.put<Task>(this.serviceUrl + '/' + task.id, task);
  }
}
