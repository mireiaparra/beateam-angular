import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as crypto from 'crypto-js';
import { Tasks } from 'src/interfaces/tasks.interface';
import { ResponseData } from 'src/interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  privatePart: string = 'To:4&dw!';
  date: Date = new Date();
  dateFormatted: string = this.date
    .toISOString()
    .split('T')[0]
    .replaceAll('-', '');
  privateKey: string = this.privatePart + this.dateFormatted;
  encrypted: any = crypto.SHA384(this.privateKey);
  token: string = this.encrypted.toString();

  getTasks(searchForm: any): Observable<Tasks[]> {
    let headers = new HttpHeaders({
      funcion: 'getTareas',
      'X-Auth': this.token,
    });

    let fechaInicio = searchForm.date[0]?.toISOString()?.split('T')[0] || '';
    let fechaFin = searchForm.date[1]?.toISOString()?.split('T')[0] || '';

    let params = new HttpParams({
      fromObject: {
        cliente: searchForm.client,
        referencia: searchForm.reference,
        usuario: searchForm.user,
        tipo: searchForm.type,
        'fecha[inicio]': fechaInicio,
        'fecha[fin]': fechaFin,
        'estado[]': searchForm.status,
      },
    });

    return this.http.get<Tasks[]>(environment.urlAPI, { headers, params });
  }

  getTypes(): Observable<ResponseData> {
    let headers = new HttpHeaders({
      funcion: 'getTipos',
      'X-Auth': this.token,
    });
    return this.http.get<ResponseData>(environment.urlAPI, { headers });
  }

  getStatus(): Observable<ResponseData> {
    let headers = new HttpHeaders({
      funcion: 'getEstados',
      'X-Auth': this.token,
    });
    return this.http.get<ResponseData>(environment.urlAPI, { headers });
  }
}
