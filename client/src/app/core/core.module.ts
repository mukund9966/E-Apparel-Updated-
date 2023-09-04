import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    // NavBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true
    // }),
    // BreadcrumbModule,
    
  ],
  exports: [
    // NavBarComponent,
  ]
})
export class CoreModule { }
