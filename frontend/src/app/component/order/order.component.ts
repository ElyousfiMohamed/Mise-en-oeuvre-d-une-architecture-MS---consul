import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../service/order.service";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any = [];
  nummberOfPages: number = 0;
  page: number = 0;

  constructor(private orderService: OrderService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getOrders(this.page);
  }

  async getOrders(page: number) {
    this.orderService.getOrders(page).then((data) => {
      console.log(data._embedded.orders);
      this.nummberOfPages = data.page.totalPages;
      this.orders = data._embedded.orders;
    }).catch((error) => {
      console.log(error);
    });
  }

  delete(id: number) {
    this.orderService.deleteOrder(id).catch((error) => {
      console.log(error);
    });
  }

  prev() {
    this.page = this.page - 1;
    this.orderService.getOrders(this.page).then((data) => {
      console.log(data._embedded.orders);
      this.orders = data._embedded.orders;
    }).catch((error) => {
      console.log(error);
    });
  }

  next() {
    this.page = this.page + 1;
    this.orderService.getOrders(this.page).then((data) => {
      console.log(data._embedded.orders);
      this.orders = data._embedded.orders;
    }).catch((error) => {
      console.log(error);
    });
  }
}
