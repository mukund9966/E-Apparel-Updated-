// import { Component } from '@angular/core';
// import { BasketItem } from '../shared/models/basket';
// import { BasketService } from './basket.service';

// @Component({
//   selector: 'app-basket',
//   templateUrl: './basket.component.html',
//   styleUrls: ['./basket.component.scss']
// })
// export class BasketComponent {

//   constructor(public basketService: BasketService) {}

//   incrementQuantity(item: BasketItem) {
//     this.basketService.addItemToBasket(item);
//   }

//   removeItem(id: number, quantity: number) {
//     this.basketService.removeItemFromBasket(id, quantity);
//   }

// }



import { Component } from '@angular/core';
import { BasketItem } from '../shared/models/basket';
import { BasketService } from './basket.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(
    public basketService: BasketService,
    private router: Router // Add the Router
  ) {}

  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id: number, quantity: number) {
    this.basketService.removeItemFromBasket(id, quantity);
  }

  checkRegistrationAndRedirect(): void {
    // Check if the user is registered by looking for the 'registeredName' in local storage
    const registeredName = localStorage.getItem('registeredName');

    if (registeredName) {
      // If registered, proceed to checkout
      this.router.navigate(['/checkout']);
    } else {
      // If not registered, show a message or take appropriate action (e.g., show a popup)
      alert('Please register first before proceeding to checkout.');
    }
  }
}
