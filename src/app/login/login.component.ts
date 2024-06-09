import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

 
 
@Component({
 
  selector: 'app-login',
 
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
 
})
 
export class LoginComponent implements OnInit{
  userName='';
 
  password= '';
  constructor(private router: Router,private usersdetails:UserDetailsService){
  }

  @ViewChild('form', { static: true }) form!: NgForm;
 
  usernameTaken = false;
 
  alertMessage = '';
 
  
  ngOnInit():void{
    
  }
onFormSubmit(){
  if (this.form.valid) {
   this.usersdetails.login(this.userName,this.password).subscribe({
      next:(response:any)=>{
        localStorage.setItem('logedUserData', JSON.stringify(response));
        localStorage.setItem('loggedinId',response.userId.toString());
              localStorage.setItem('loggedinemail',response.email);
              localStorage.setItem('logedinName',response.userName);
              
        
        console.log('success');
        if(this.userName == 'pavan'  && this.password == 'pavan1' )
        this.router.navigate(['/admin'], { queryParams: { userId: this.userName}});
        else
        this.router.navigate(['/Home'], { queryParams: { userId: this.userName}});
        
      },
      error:(error:any) =>{
      this.alertMessage = 'Login Failed';
 
    }
    
  });
}
   }
   reload(){
    // any other execution
    location.reload();
  }
  
  }