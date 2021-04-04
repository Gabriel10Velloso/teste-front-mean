import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { delay, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClientModel } from "../pages/models/client";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  /** Get all clients */
  getAllClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl)
      .pipe(
        delay(1000),
        map(res => {
          return res
        })
      )
  }

  /** Get clients by name */
  getByName(search: any): Observable<ClientModel[]> {
    let name = undefined;
    if (search) {
      name = search;
    }
    return this.http.get<ClientModel[]>(`${this.apiUrl}/name/${name}`,)
      .pipe(
        take(1),
        delay(1000),
        map((res: ClientModel[]) => {
          return res;
        }),
      );
  }

  /** Get general totals */
  getTotal(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/totals')
      .pipe(
        map(res => {
          return res
        })
      )
  }

  /** Get a client by _id */
  getClientId(id): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiUrl}/${id}`,)
      .pipe(
        take(1),
        delay(1000),
        map((res: ClientModel[]) => {
          return res;
        }),
      );
  }

  /** Get client totals */
  getClientIdTotal(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/totals`)
      .pipe(
        map(res => {
          return res
        })
      )
  }

  /** Get all enterprises by client */
  getClientIdEmterprise(id): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.apiUrl}/${id}/enterprise`)
      .pipe(
        take(1),
        delay(1000),
        map(res => {
          return res
        })
      )
  }

  /** Get enterprises by client and name */
  getEmterprisesClientId(name, id): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiUrl}/${id}/enterprise/name/${name}`)
      .pipe(
        take(1),
        delay(1000),
        map(res => {
          return res
        })
      )
  }
}
