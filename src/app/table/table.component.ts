import { PaginationComponent } from './../pagination/pagination.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormTypes, TaskField } from '../form-types';
import { TasksService } from '../tasks.service';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, CommonModule, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  tasks$: Observable<FormTypes[]>
  numbersOfTasks$: Observable<number>

  currentPage: number = 1;
  itemsPerPage: number = 10;

  pagination$: Observable<any>

  TaskField = TaskField

  sortPosition: boolean = false

  columns = [
    { title: 'SecondName', field: TaskField.SecondName, scope: 'col' },
    { title: 'Firstname', field: TaskField.FirstName, scope: 'col' },
    { title: 'Content', field: TaskField.Content, scope: 'col' },
    { title: 'Data', field: TaskField.Date, scope: 'col' }
  ];

  constructor(private taskService: TasksService) {
    this.tasks$ = this.taskService.tasks$

    this.pagination$ = this.taskService.tasks$

    this.numbersOfTasks$ = this.taskService.tasks$.pipe(
      map((tasks) => tasks.length)
    )
  }

  changeSortIcon() {
    this.sortPosition = !this.sortPosition
  }

  sortContent(field: TaskField) {
    this.changeSortIcon()
    this.taskService.sortContent(this.sortPosition, field)
  }

}
