import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../userDetails-model';
import { UserDetailsService } from '../user-details.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone:false,
  styleUrls: ['./user.component.css']
})
export class userComponent
{

    userdetails: UserDetails[]=[];
user: any;

    constructor(private  userDetails:UserDetailsService) { }
    
  ngOnInit(): void {
    this.getuserDetails();
  }

    getuserDetails(): void {
        if(true){
    
        console.log("if true")
        this.userDetails.getusers().subscribe(
          details => {
            this.userdetails = details;
            console.log("I Got the details")
            console.log(this.userdetails)
          },
          error => {
            console.log('Error fetching flat details:');
          }
        );
        }
        console.log("getting");
      }

}