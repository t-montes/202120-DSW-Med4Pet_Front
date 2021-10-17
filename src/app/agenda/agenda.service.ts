import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiUrl:string = environment.baseUrl + 'agendas';
  constructor(private http: HttpClient) { }
  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiUrl);
  }
}
