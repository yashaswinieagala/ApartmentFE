import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails} from './userDetails-model';
import { environment } from '../Environments/Environment';
import { AddUserDetails } from './userDetails-request.model';
import { Login } from '../login model';
 
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
 
  isauthenticated=false;
 
  constructor(private http:HttpClient) { }
 
 adduserDetails(userId:number,userName:string,email:string,password:string,isAdmin:ConstrainBoolean)
 {
  console.log("I am using add")
     const body={userId,userName,email,password,isAdmin}
     return this.http.post('https://localhost:7087/api/UserDetails',body)
 }
 getusers():Observable<any[]>
 {
     return this.http.get<any[]>('https://localhost:7087/api/UserDetails'); 
 }

 login(userName:string,password:string) {
  const body={userName,password}
  this.isauthenticated=true;
  return this.http.post<UserDetails>('https://localhost:7087/api/Login',body);
 
}
 
 
isAuthenticated(){
  return this.isauthenticated;
}
 
 
 
getUserDetails():Observable<UserDetails[]>{
  return this.http.get<UserDetails[]>("https://localhost:7087/api/UserDetails");
 
}
getUserRegistrationDetails():Observable<UserDetails[]>{
  return this.http.get<UserDetails[]>("https://localhost:7087/api/UserDetails");
 
}
 
// getUserDetailsByUserId(userId:number):Observable<AddUserDetails>{
//   return this.http.post<UserDetails>("https://localhost:7235/api/MeetingDetails/byUserId?userid=",+userId);
 
// }
 
 
 
}