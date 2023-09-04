import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)},
  { path: 'basket', component: BasketComponent },
  // {path:'shop/:id', component:ProductDetailsComponent},
  // {path:'checkout', component:CheckoutComponent},
  {path: 'thank-you', component:ThankYouComponent},


  {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
