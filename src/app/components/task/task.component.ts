import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  //Como estamos obligados a declarar valores, el ITask podría ser en principio undefined, para evitar errores
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  deleteTask() {
    // Notificamos al componente superior de la tarea a eliminar
    this.delete.emit(this.task); 
  }
}
