import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any = [];
  nummberOfPages: number = 0;
  page: number = 0;

  constructor(private customerService:CustomerService) { }
  ngOnInit(): void {
    this.getCustomers(this.page);
  }

  async getCustomers(page:number){
    this.customerService.getCustomers(page).then((data) => {
      console.log(data._embedded.customers);
      this.nummberOfPages = data.page.totalPages;
      this.customers = data._embedded.customers;
    }).catch((error) => {
      console.log(error);
    });
  }


  delete(id:number){
    this.customerService.deleteCustomer(id).catch((error) => {
      console.log(error);
    });
  }

  prev() {
    this.page = this.page - 1;
    this.customerService.getCustomers(this.page).then((data) => {
      console.log(data._embedded.customers);
      this.customers = data._embedded.customers;
    }).catch((error) => {
      console.log(error);
    });
  }

  next() {
    this.page = this.page + 1;
    this.customerService.getCustomers(this.page).then((data) => {
      console.log(data._embedded.customers);
      this.customers = data._embedded.customers;
    }).catch((error) => {
      console.log(error);
    });
  }

}
