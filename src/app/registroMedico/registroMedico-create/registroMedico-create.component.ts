import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistroMedico } from '../registroMedico';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { RegistroMedicoService } from '../registroMedico.service';


export class DatepickerOverviewExample {}
@Component({
  selector: 'app-registroMedico-create',
  templateUrl: './registroMedico-create.component.html',
  styleUrls: ['./registroMedico-create.component.css']
})
export class RegistroMedicoCreateComponent implements OnInit {
  picker:Date
  registroForm: FormGroup;
  model: NgbDateStruct;
  date: {year: number, month: number};
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private calendar: NgbCalendar,private registroService:RegistroMedicoService) { }
  selectToday() {
    this.model = this.calendar.getToday();
  }
ngOnInit() {
  this.registroForm = this.formBuilder.group({
    identificacion: ["", [Validators.required, Validators.minLength(2)]],
    fechaExpedicion: ["", [Validators.required]],
    imagen:["", [Validators.required]]
  });
}
createCalificacion(newRegistro: RegistroMedico) {
  // Process checkout data here
  console.warn("el registro medico fue creado", newRegistro);
  this.registroService.createRegistroMedico(newRegistro).subscribe(calif => {
    this.toastr.success(calif.identificacion);
    this.registroForm.reset();
     });
  this.registroForm.reset();

}
cancelCreation() {
  console.log("Cancelando ...");
  this.registroForm.reset();
}

}
