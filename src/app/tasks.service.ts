import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormTypes } from './form-types';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<FormTypes[]>([])

  constructor() { }

  addTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.value))
  }

  getTasksFromStorage() {
    const tasksFromStorage = localStorage.getItem('tasks')
    const parsed = JSON.parse(tasksFromStorage as any)
    this.tasks$.next(parsed || [])
  }

  addTask( form: FormTypes){
    this.tasks$.next([...this.tasks$.value, form]);
    console.log(this.tasks$.value.length)
    this.addTasksToStorage()
  }

}
