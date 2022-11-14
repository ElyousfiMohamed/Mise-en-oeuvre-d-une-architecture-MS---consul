import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  orderId!: number;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.getOrder(id);
    });
  }

  async getOrder(id: number) {
    this.orderService.getOrder(id).then((data) => {
      this.order = data;
      console.log(this.order);
    }).catch((error) => {
      console.log(error);
    });
  }
}
