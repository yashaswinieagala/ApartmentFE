import { Component, ViewChild, ElementRef, booleanAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { WizardDetails } from '../wizard-details.service';
import { Router } from '@angular/router';
import { ComplexDetails } from '../complexDetails-model';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, NgFor, RouterLink]
})
export class WizardComponent {


  step: number = 1;
  currentFlatIndex: number = 0;
  noofFlats: number = 0;
  complexId:number=0;
  flats: any[] = [];
  flatNo:number=0;
  ownerPicture :File | null = null;
  ownerName:string='';
  size:number= 0;
  facing:string= '';
  contactNumbers:number= 0;
  email:string= '';
  occupants:number= 0;
  selectedServices: boolean = false 
  savedFlatData: any[] = [];
 
  model:ComplexDetails
  //form:FormGroup
  alertMessage: string="";
  isSuccess: boolean=false;
  isError: boolean=false;
  form!: NgForm;

  constructor(private fb: FormBuilder,private router: Router, private wizardDetailsService: WizardDetails) {
    this.model={
      noofFlats:0

    }
  }

  // Custom validator function for phone number
  phoneNumberValidator(): any {
    return (control: any): { [key: string]: any } | null => {
      const phoneNumber = control.value;
      const isValid = /^\d{10}$/.test(phoneNumber); // Check if phone number is exactly 10 digits
      return isValid ? null : { invalidPhoneNumber: { value: control.value } };
    };
  }

    nextStep() {
    this.step++;
    if (this.step === 2) {
      // Initialize flats array based on number of flats
      for (let i = 0; i < this.noofFlats; i++) {
        this.flats.push({
          complexId:0,
          flatNo:0,
          ownerName:'',
          ownerPicture: null,
          size: '',
          facing: '',
          contactNumbers: '',
          email: '',
          occupants: 0,
          selectedServices: false // Initialize selected services as an empty object
          // Add more fields as needed
        });
      }
    }
  }

 
  // Function to handle file selection for owner picture
  onFileSelected(event: any, index: number) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // Assuming you want to store the selected file in the flats array
      this.flats[index].ownerPicture = file;
    }
  }

  prevStep() {
    this.step--;
  }

  saveAndNext() {
    // Save the current flat data
    console.log('Flat', this.currentFlatIndex + 1, 'Data:', this.flats[this.currentFlatIndex]);
    // Push the current flat data into an array
    const flatData = this.flats[this.currentFlatIndex];
    this.savedFlatData.push(flatData);
    // Clear current flat data
    this.flats[this.currentFlatIndex] = {};

    // Move to next flat or finish if all flats are entered
    if (this.currentFlatIndex < this.noofFlats - 1) {
      this.currentFlatIndex++;
      this.step = 2; // Go back to step 2 for entering next flat data
    } else {
      this.step = 3; // Proceed to next step after entering data for all flats
      console.log('All flat data:', this.savedFlatData);      

    }
  }

  Next()
  {
    if (this.form.valid) {
      console.log(this.noofFlats);
      this.wizardDetailsService.AddComplexDetails(this.noofFlats).subscribe(
        (_response) => {
          this.alertMessage = "Registration successfull";
          this.isSuccess = true;
          this.isError = false;
        },
        (error) => {
          this.alertMessage = 'server error.';
          this.isSuccess = false;
          this.isError = true;
        });
    }
  }

  
  onFormSubmit(): void {
    if (this.form.valid) {
      console.log("got inside");
      console.log(this.flatNo)
      this.wizardDetailsService.addFlatDetails(this.complexId,this.flatNo,this.ownerName,this.size,this.facing,this.contactNumbers,this.email,this.occupants,this.selectedServices).subscribe(
        
        (_response) => {
          this.alertMessage = "Registration successfull";
          this.isSuccess = true;
          this.isError = false;
        },
        (error) => {
          this.alertMessage = 'server error.';
          this.isSuccess = false;
          this.isError = true;
        });
    }
  }

  // In your component class
isValidPhoneNumber(phoneNumber: string): boolean {
  const phoneNumberPattern = /^\d{10}$/; // Regular expression pattern for exactly 10 digits
  return phoneNumberPattern.test(phoneNumber);
}


  checkdetails(){

  }

 

  startOver() {
    // Reset wizard
    this.step = 1;
    this.currentFlatIndex = 0;
    this.noofFlats = 0;
    this.flats = [];
    this.savedFlatData = [];
  }
}
