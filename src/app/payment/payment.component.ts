import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      const paymentData = form.value;
      console.log('Payment Data:', paymentData);
      // You can handle the form submission here, e.g., send the data to a server
      alert('Payment submitted successfully!');
    }
  }
}
