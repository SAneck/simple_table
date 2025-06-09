import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, startWith, switchMap } from 'rxjs'
import { FormTypes, TaskField } from './form-types'
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  end$ = new BehaviorSubject<number>(5)
  start$ = new BehaviorSubject<number>(0)

  tasks$ = new BehaviorSubject<FormTypes[]>([])
  totalItems$: Observable<number[]>

  constructor() {
    this.totalItems$ = this.tasks$.pipe(
      map((tasks) => {
        const itemsPerPage = 5
        const totalPages = Math.ceil(tasks.length / itemsPerPage)
        return Array.from({ length: totalPages }, (_, i) => i + 1)
      }),
      startWith([])
    )
  }

  addTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.value))
  }

  getTasksFromStorage() {
    const tasksFromStorage = localStorage.getItem('tasks')
    const parsed = JSON.parse(tasksFromStorage as any)
    this.tasks$.next(parsed || [])
  }

  addTask(form: FormTypes) {
    this.tasks$.next([...this.tasks$.value, form])
    this.addTasksToStorage()
  }


  sortContent(sortState: boolean, field: TaskField) {
    if (sortState) {
      this.tasks$.value.sort((firstMeaning, secondMeaning) => {
        return (firstMeaning[field] as string)!.localeCompare(secondMeaning[field] as string || '')
      })
    } else {
      this.tasks$.value.sort((firstMeaning, secondMeaning) => {
        return (secondMeaning[field] as string)!.localeCompare(firstMeaning[field] as string || '')
      })
    }
  }

  goToPage(pageNumber: number) {
    const itemsPerPage = 5
    const newStart = (pageNumber - 1) * itemsPerPage
    const newEnd = pageNumber * itemsPerPage

    this.start$.next(newStart)
    this.end$.next(newEnd)
  }

  paginateNext() {
    const currentPage = this.start$.value / 5 + 1
    const totalPages = (this.tasks$.value.length / 5)
    if (currentPage < totalPages) {
      this.goToPage(currentPage + 1)
    }
  }

  paginateBack() {
    const currentPage = this.start$.value / 5 + 1
    if (currentPage > 1) {
      this.goToPage(currentPage - 1)
    }
  }



}