import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class adminComponent implements OnInit {
  showModal = false;

  constructor() { }

  username:any;

  ngOnInit(): void {
    const name=localStorage.getItem("logedinName");
    if(name != null){
      this.username=name;
    }
  }

  openServicesModal() {
    this.showModal = true;
  }

  closeServicesModal() {
    this.showModal = false;
  }

  keepModalOpen() {
    this.showModal = true;
  }



}
