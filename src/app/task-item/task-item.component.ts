import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }

  onToggle() {
    this.toggle.emit(this.task.id);
  }
}