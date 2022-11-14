import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  orders: any = [];
  nummberOfPages: number = 0;
  page: number = 0;
  customerId!:number;

  constructor(private route: ActivatedRoute,
              private orderService:OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      this.getOrders(this.page);
    });
  }

  async getOrders(page: number) {
    // get orders then filter by customer id
    this.orderService.getOrders(page).then((data) => {
      this.nummberOfPages = data.page.totalPages;
      this.orders = data._embedded.orders.filter((order:any) => order.customerId == this.customerId);
      console.log(this.orders);
    }).catch((error) => {
      console.log(error);
    });
  }

  prev() {

  }

  next() {

  }

  delete(id: number) {

  }
}
