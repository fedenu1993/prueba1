import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getWithPaginate(pag_size: number, pag_index: number): Observable<paginate>{

    const skip = (pag_index * pag_size) + 1;
    let count = 0;
    let users = [];
    return this.http.get<User[]>('./assets/database/users.json').pipe(map(data => {
      const count = data.length;
      const users = data.slice(skip, skip + pag_size);
      return {
        elements: users,
        length: count
      };
    }))
    
  }

}

interface paginate{
  elements: User[];
  length: number;
}
