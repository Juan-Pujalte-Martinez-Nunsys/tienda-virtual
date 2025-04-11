import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Adapter } from '../adapters/adapter';

export class ApiService<T> {
  private server = "http://localhost:4100/api/";

  constructor(
    private http: HttpClient,
    private adapter: Adapter<T>,
    private endpoint: string
  ) { }

  public getAll(): Observable<T[]> {
    return this.http.get(this.server + this.endpoint).pipe(
      map((raws: any) => raws.map(this.adapter.adapt))
    );
  }
}
