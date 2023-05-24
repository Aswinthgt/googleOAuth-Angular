import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { first, map } from 'rxjs/operators';
import { IProfile } from '../interface/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get<IProfile>(`${environment.API}/dashboard/profile`, { withCredentials: true }).pipe(map(s=>s.message))
  }


}
