import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'orders-list',
    component: OrdersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
