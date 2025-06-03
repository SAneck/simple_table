import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { FormTypes, TaskField } from './form-types';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<FormTypes[]>([])

  pagination$ = new BehaviorSubject<any>([])

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
    this.addTasksToStorage()
  }

  paginate(){
    this.pagination$.next([...this.tasks$.value])
  }

  sortContent(sortState: boolean, field: TaskField){
    if(sortState){
      this.tasks$.value.sort((firstMeaning,secondMeaning) => {
        return (firstMeaning[field] as string)!.localeCompare(secondMeaning[field] as string || '' )
      })
    } else {
      this.tasks$.value.sort((firstMeaning,secondMeaning) => {
        return (secondMeaning[field] as string)!.localeCompare(firstMeaning[field] as string || '' )
      })
    }
  }
}