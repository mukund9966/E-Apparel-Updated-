import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { BasketComponent } from './basket.component';

const routes: Routes = [
  {path: '', component: BasketComponent},
  {path:'basket', component:BasketComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BasketRoutingModule {
  constructor(private router: Router) { }
  
 }
