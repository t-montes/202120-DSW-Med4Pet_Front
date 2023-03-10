import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClienteDetail } from '../clienteDetail';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {

  selected = true;

  @Input() clienteDetail: ClienteDetail;


  constructor() { }

  ngOnInit() {
    console.log(this.clienteDetail.id);
  }

}

