import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: { key: keyof T; label: string }[] = [];
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  onEdit(item: T) {
    this.edit.emit(item);
  }

  onDelete(item: T) {
    this.delete.emit(item);
  }
}
