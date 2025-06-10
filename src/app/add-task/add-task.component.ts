import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {
  mainFrom: FormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date: new FormControl(new Date())
    })

  constructor(private tasksService: TasksService){}

  submit(){
    this.tasksService.addTask(this.mainFrom.value)
  }



}
