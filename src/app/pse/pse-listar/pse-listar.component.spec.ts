/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PseListarComponent } from './pse-listar.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Pse } from "../pse";


describe('PseListarComponent', () => {
  let component: PseListarComponent;
  let fixture: ComponentFixture<PseListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseListarComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseListarComponent);
    component = fixture.componentInstance;
    component.pses = [new Pse(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    )]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an card-header element", () => {
    expect(debug.query(By.css(".card-header")).nativeElement.innerText).toContain(
      component.pses[0].nombre
    );
  });
});
