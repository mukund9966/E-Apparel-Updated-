import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private router: Router) { }

  getName(): string {
    return localStorage.getItem('registeredName') || '';
  }

  // Define properties for form data
  shippingAddress: string = '';
  contactNumber: string = '';

  // Rest of your component code

  submitOrder(): void {
    // Access form data here
    console.log('Shipping Address:', this.shippingAddress);
    console.log('Contact Number:', this.contactNumber);
    this.router.navigate(['/thank-you'], {
      
    });

    // Handle the order submission (e.g., send data to the server, update order status, etc.)
    // You can add your logic here
  }
}
