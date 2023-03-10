/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cliente } from '../../cliente/cliente';
import { MascotaDetailComponent } from './mascota-detail.component';
import { Mascota } from '../mascota';
import faker from 'faker';

describe('MascotaDetailComponent', () => {
  let component: MascotaDetailComponent;
  let fixture: ComponentFixture<MascotaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaDetailComponent);
    component = fixture.componentInstance;

    let cliente = new Cliente(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      null
    );

    component.mascotaDetail =
      new Mascota( faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      cliente,
      null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
