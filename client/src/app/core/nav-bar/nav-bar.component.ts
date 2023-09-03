// import { Component } from '@angular/core';
// import { BasketService } from 'src/app/basket/basket.service';
// import { BasketItem } from 'src/app/shared/models/basket';

// @Component({
//   selector: 'app-nav-bar',
//   templateUrl: './nav-bar.component.html',
//   styleUrls: ['./nav-bar.component.scss']
// })
// export class NavBarComponent {

//   constructor(public basketService: BasketService) {}

//   getCount(items: BasketItem[]) {
//     return items.reduce((sum, item) => sum + item.quantity, 0);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  registeredName: string | undefined;
  showRegistrationForm = false;
  formData: any = {};

  constructor(public basketService: BasketService) {}
  ngOnInit(): void {
    this.registeredName = localStorage.getItem('registeredName') || '';
  }

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  openRegistrationForm(): void {
    this.showRegistrationForm = true;
  }

  closeRegistrationForm(): void {
    this.showRegistrationForm = false;
  }

  logout(): void {
    // Clear the registered name
    this.registeredName = '';
    
    // Remove the registered name from local storage
    localStorage.removeItem('registeredName');
  }

  register(): void {
    // Handle form submission here (e.g., save data, update navbar)
    // For simplicity, we'll just display the name on the navbar
    this.registeredName = this.formData.name;
    localStorage.setItem('registeredName', this.registeredName || '');

    this.showRegistrationForm = false;
  }
}
