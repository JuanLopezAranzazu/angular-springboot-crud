import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() title: string = 'Formulario';
  @Input() fields: { key: string; label: string; type: string }[] = [];
  @Input() data: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges() {
    this.fields.forEach((field) => {
      this.form.addControl(field.key, this.fb.control(this.data[field.key]));
    });
  }

  onSubmit() {
    this.save.emit(this.form.value);
  }
}
