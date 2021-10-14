/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeterinarioListComponent } from './veterinario-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Veterinario } from "../veterinario";
import { Contacto } from "src/app/contacto/contacto";

import { HttpClientModule } from '@angular/common/http';

describe('VeterinarioListComponent', () => {
  let component: VeterinarioListComponent;
  let fixture: ComponentFixture<VeterinarioListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ VeterinarioListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioListComponent);
    component = fixture.componentInstance;
    let contacto = new Contacto(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    component.veterinarios = [
      new Veterinario(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        contacto
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", ()=>{
    expect(debug.query(By.css(".card-header")).nativeElement.innerText).toContain(
      component.veterinarios[0].nombre
    );
  });
});
