import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  name = new BehaviorSubject('pradeep');
  name$ = this.name.asObservable();
  isact:boolean=false;
  constructor(private http : HttpClient) {

  }
  getUrl(){
   return this.http.get('https://fakestoreapi.com/products');
  }
   getName(){
    return this.name$;
   }
}
