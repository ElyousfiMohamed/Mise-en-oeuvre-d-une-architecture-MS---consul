import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public async getProducts(page:number): Promise<any> {
    return await this.http.get<any>(environment.baseUrl+"/inventory-service/products?size=6&page="+page).toPromise();
  }

  public async deleteProduct(id:number): Promise<any> {
    return await this.http.delete<any>(environment.baseUrl+"/inventory-service/products/"+id).toPromise();
  }
}
