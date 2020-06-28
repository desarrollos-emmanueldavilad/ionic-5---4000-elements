import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService {
// API path
public URL_PATH = 'http://localhost:3000/sanitas';

  constructor(private http: HttpClient) { }

  public getList(params ?: any): Observable<any> {
    return new Observable<any>((observer) => {
      this.http.get(this.URL_PATH + params).subscribe((status) => {
        try {
          if (status) {
            observer.next(status);
          }
        } catch (error) {
          observer.error();
        }
      });
    });
  }



  
  
}
