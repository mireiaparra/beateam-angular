import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as crypto from 'crypto-js';
import { Tasks } from 'src/interfaces/tasks.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {

  constructor(private http: HttpClient) { }

  
  privatePart: string = 'To:4&dw!';
  date: Date = new Date();
  dateFormatted: string = this.date.toISOString().split('T')[0].replaceAll('-', "");
  privateKey: any = this.privatePart + this.dateFormatted;
  encrypted: any = crypto.SHA384(this.privateKey);
  token: any = this.encrypted.toString();


 
ngOnInit(){
}

  getTasks(searchForm: any): Observable<Tasks[]>{
    let headers = new HttpHeaders({
      'funcion':'getTareas',
      'X-Auth': this.token
    })

    let fechaInicio = searchForm.date[0]?.toISOString()?.split('T')[0] || ''
    let fechaFin = searchForm.date[1]?.toISOString()?.split('T')[0] || ''

    let params = new HttpParams({fromObject: {
      'cliente': searchForm.client,
      'referencia': searchForm.reference,
      'usuario': searchForm.user,
      'tipo': searchForm.type,
      'fecha[inicio]': fechaInicio,
      'fecha[fin]': fechaFin,
      'estado[]': searchForm.status
    }});

    return this.http.get<[]>(environment.urlAPI, {headers, params})
  }

  getTypes(): Observable<string[]>{
    let headers = new HttpHeaders({
      'funcion':'getTipos',
      'X-Auth': this.token
    })
    return this.http.get<[]>(environment.urlAPI, {headers})
  }

  getStatus(): Observable<string[]>{
    let headers = new HttpHeaders({
      'funcion':'getEstados',
      'X-Auth': this.token
    })
    return this.http.get<[]>(environment.urlAPI, {headers})
  }

}
