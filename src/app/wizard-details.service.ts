import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails} from './userDetails-model';
import { environment } from '../Environments/Environment';
import { AddUserDetails } from './userDetails-request.model';
import { ComplexDetails } from './complexDetails-model';
 
@Injectable({
  providedIn: 'root'
})
export class WizardDetails {
 
  isauthenticated=false;
 
  constructor(private http:HttpClient) { }
 
addFlatDetails(complexId:number,flatNo:number,ownerName:string,size:number,facing:string,contactNumbers:number,email:string,occupants:number,selectedServices: boolean )
 {
     const body={complexId,flatNo,ownerName,size,facing,contactNumbers,email,occupants,selectedServices}
     return this.http.post('https://localhost:7087/api/FlatDetails',body)
     
 }
AddComplexDetails(noofFlats:number){
    const body = {noofFlats}
  return this.http.post('https://localhost:7087/api/ComplexDetails',body)
}

isAuthenticated(){
  return this.isauthenticated;
}
 
getflatDetails():Observable<any[]>{
  console.log("i am in service")
  return this.http.get<any[]>('https://localhost:7087/api/FlatDetails'); 
}
 
}