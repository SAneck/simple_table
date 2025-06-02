import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable, toArray } from 'rxjs';
import { FormTypes } from '../form-types';
import { TasksService } from '../tasks.service';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { DateTransformPipe } from '../date-transform.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  tasks$: Observable<FormTypes[]>
  numbersOfTasks$: Observable<number>

  constructor(private taskService: TasksService){
    this.tasks$ = this.taskService.tasks$

    this.numbersOfTasks$ = this.taskService.tasks$.pipe(
      map((tasks) => tasks.length)
    )

  }



}
