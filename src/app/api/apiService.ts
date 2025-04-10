import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiService<T> {
  private server = "http://localhost:4100/";

  constructor(
    private http: HttpClient,
    private endpoint: string
  ) { }

  public get(): Observable<T> {
    return this.http.get<T>(this.server + this.endpoint);
  }
}
