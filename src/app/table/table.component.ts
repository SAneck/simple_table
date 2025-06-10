import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { FormTypes, TaskField } from '../form-types'
import { TasksService } from '../tasks.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tasks$: Observable<FormTypes[]>
  totalItems$: Observable<number[]>

  startValue: number = 0
  endValue: number = 5

  sortPosition: boolean = false
  TaskField = TaskField

  columns = [
    { title: 'SecondName', field: TaskField.SecondName, scope: 'col' },
    { title: 'Firstname', field: TaskField.FirstName, scope: 'col' },
    { title: 'Content', field: TaskField.Content, scope: 'col' },
    { title: 'Data', field: TaskField.Date, scope: 'col' }
  ]

  constructor(private taskService: TasksService) {
    this.tasks$ = this.taskService.tasks$
    this.totalItems$ = this.taskService.totalItems$

    this.taskService.start$.subscribe(val => this.startValue = val)
    this.taskService.end$.subscribe(val => this.endValue = val)
  }

  goToPage(page: number) {
    this.taskService.goToPage(page)
  }

  nextPage() {
    this.taskService.paginateNext()
  }

  prevPage() {
    this.taskService.paginateBack()
  }

  changeSortIcon() {
    this.sortPosition = !this.sortPosition
  }

  sortContent(field: TaskField) {
    this.changeSortIcon()
    this.taskService.sortContent(this.sortPosition, field)
  }

  isActivePage(page: number): boolean {
    return this.startValue === (page - 1) * 5;
  }
}