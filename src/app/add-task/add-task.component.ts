import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTypes } from '../form-types';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {
  mainFrom: FormGroup

  constructor(private tasksService: TasksService){
    this.mainFrom = new FormGroup<FormTypes>({
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date: new FormControl(new Date())
    })
  }

  submit(){
    this.tasksService.addTask({
      content: this.mainFrom.value.content || '',
        firstName: this.mainFrom.value.firstName || '',
        secondName: this.mainFrom.value.secondName || '',
        date: this.mainFrom.value.date || new Date()
    })
  }



}
