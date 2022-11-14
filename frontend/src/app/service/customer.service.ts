import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }
};

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  public async getCustomers(page:number): Promise<any> {
    return await this.http.get<any>(environment.baseUrl + "/customer-service/customers?size=6&page="+page).toPromise();
  }

  public async deleteCustomer(id:number): Promise<any> {
    return await this.http.delete<any>(environment.baseUrl + "/customer-service/customers/"+id, httpOptions).toPromise();
  }

  public async getCustomer(id:number): Promise<any> {
    return await this.http.get<any>(environment.baseUrl + "/customer-service/customers/"+id).toPromise();
  }
}
