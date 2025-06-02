import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormTypes } from './form-types';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<FormTypes[]>([])

  constructor() { }

  addTask( form: FormTypes){
    this.tasks$.next([...this.tasks$.value, form]);
    console.log(this.tasks$.value)
  }

}
