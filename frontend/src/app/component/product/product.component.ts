import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = [];
  nummberOfPages: number = 0;
  page: number = 0;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts(this.page);
  }

  async getProducts(page:number){
    this.productService.getProducts(page).then((data) => {
      console.log(data._embedded.products);
      this.nummberOfPages = data.page.totalPages;
      this.products = data._embedded.products;
    }).catch((error) => {
      console.log(error);
    });
  }

  delete(id:number) {
    this.productService.deleteProduct(id).catch((error) => {
      console.log(error);
    });
  }

  randomImage() {
    let paths = ["assets/pc1.png", "assets/pc2.png"]
    return paths[Math.floor(Math.random() * paths.length)];
  }

  randomRating() {
    return Math.floor(Math.random() * 5) + 1;
  }

  prev() {
    if(this.page > 0) {
      this.page--;
      this.getProducts(this.page);
    }
  }

  next() {
    if(this.page < this.nummberOfPages - 1) {
      this.page++;
      this.getProducts(this.page);
    }
  }
}
