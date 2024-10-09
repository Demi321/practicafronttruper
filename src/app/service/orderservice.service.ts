import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private apiUrl ="http://localhost:8080"  
  
  constructor(public client:HttpClient) { }

 
   getAll(): Observable<any> {
    
   
    return this.client.get(this.apiUrl+"/ordenes/getAll");
  }


}
