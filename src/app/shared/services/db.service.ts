import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService {
// API path
private URL_PATH = 'http://localhost:3000/sanitas';


  constructor(private http: HttpClient) { }


  public getList(params): Observable<any> {
    try {
      console.log(this.URL_PATH + params);
      return this.http.get(this.URL_PATH + params);
    } catch (error) {
      // tslint:disable-next-line: no-unused-expression
      console.error(error)
    }
  }
  
}
