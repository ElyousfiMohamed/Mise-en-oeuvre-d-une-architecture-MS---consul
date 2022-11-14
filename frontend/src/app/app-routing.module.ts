import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent} from "./component/container/container.component";
import {CustomerComponent} from "./component/customer/customer.component";
import {ProductComponent} from "./component/product/product.component";
import {OrderComponent} from "./component/order/order.component";
import {CustomerOrdersComponent} from "./component/customer-orders/customer-orders.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'customerOrders/:id', component: CustomerOrdersComponent },
  { path: 'orderDetails/:id', component: OrderDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
