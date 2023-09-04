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

  shippingAddress: string = '';
  contactNumber: string = '';


  submitOrder(): void {

    this.router.navigate(['/thank-you'], {
      
    });

    
  }
}
