import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  createCliente(newCliente: any ) {
    // Process checkout data here
    console.warn("el cliente fue creado", newCliente);

    //-----------------------------------------------------------------
    // this.clientService.createClient(newClient).subscribe(client => {
    //   this.clientes.push(client);
    //  this.showSuccess(newClient);
    // });
    //------------------------------------------------------------------
    this.clienteForm.reset();

  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.clienteForm.reset();
  }
}

