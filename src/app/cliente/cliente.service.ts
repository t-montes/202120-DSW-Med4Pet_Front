import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private apiUrl:string = environment.baseUrl + 'clientes';
constructor(private http: HttpClient) { }

getClientes(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl);
}

createCliente(cliente:Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.apiUrl, cliente);
}

}
