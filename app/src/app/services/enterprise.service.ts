import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { delay, map, take } from 'rxjs/operators';
import { ClientModel } from "../pages/models/client";

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }


    /** Get all clients */
    getAllEnterprises(): Observable<ClientModel[]> {
      return this.http.get<ClientModel[]>(this.apiUrl+'/enterprise/enterprises')
        .pipe(
          take(1),
          delay(1000),
          map(res => {
            return res
          })
        )
    }
}
