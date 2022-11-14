import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerComponent } from './component/container/container.component';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import { NavbarComponent } from './component/navbar/navbar.component';
import { PanelComponent } from './component/panel/panel.component';
import { AppRoutingModule } from './app-routing.module';
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CustomerComponent } from './component/customer/customer.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import { ProductComponent } from './component/product/product.component';
import {RatingModule} from "primeng/rating";
import { OrderComponent } from './component/order/order.component';
import { CustomerOrdersComponent } from './component/customer-orders/customer-orders.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import {SplitterModule} from "primeng/splitter";

@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    PanelComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    CustomerOrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AppRoutingModule,
    FieldsetModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    RatingModule,
    SplitterModule

  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
