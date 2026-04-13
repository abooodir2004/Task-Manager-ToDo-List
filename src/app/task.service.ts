import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define what a Task looks like
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() {
    // Sample initial tasks
    this.tasks = [
      { id: 1, title: 'Learn Angular', description: 'Study Angular fundamentals', completed: false, dueDate: new Date('2024-12-31') },
      { id: 2, title: 'Build Project', description: 'Create a task manager app', completed: true, dueDate: new Date('2024-12-25') }
    ];
    this.tasksSubject.next(this.tasks);
  }

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = {
      ...task,
      id: this.tasks.length + 1
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks);
    }
  }
}