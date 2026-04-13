import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask = {
    title: '',
    description: '',
    dueDate: new Date()
  };

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.title.trim()) {
      this.taskService.addTask({
        title: this.newTask.title,
        description: this.newTask.description,
        completed: false,
        dueDate: this.newTask.dueDate
      });
      
      // Reset form
      this.newTask = {
        title: '',
        description: '',
        dueDate: new Date()
      };
    }
  }
}