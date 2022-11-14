import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public async getOrders(page:number): Promise<any> {
    return await this.http.get<any>(environment.baseUrl+"/order-service/orders?size=6&page="+page).toPromise();
  }

  public async deleteOrder(id:number): Promise<any> {
    return await this.http.delete<any>(environment.baseUrl+"/order-service/orders/"+id).toPromise();
  }

  public async getOrder(id:number): Promise<any> {
    return await this.http.get<any>(environment.baseUrl+"/order-service/fullOrder/"+id).toPromise();
  }
}
