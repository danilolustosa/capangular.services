import { Inject, Injectable } from '@angular/core';
import { Product } from './../../models/product.model';
import { LoggerService } from './../logger/logger.service';
import { AppConfig } from './../../token';

@Injectable()
export class ProductService{

  constructor(
    @Inject(LoggerService) private loggerService:LoggerService,
    @Inject(AppConfig) private appConfig: Config
  ) {
    this.loggerService.log("Product Service Constructed");
  }

  public getProducts() {
    this.loggerService.log("getProducts called");
    this.loggerService.log(this.appConfig.serviceURL + "/product/get");

    let products:Product[];
    products=[
      new Product(1,'Memory Card',500),
      new Product(1,'Pen Drive',750),
      new Product(1,'Power Bank',100)
    ]

    this.loggerService.log(products);

    return products;
  }

}

interface Config {
  serviceURL?:string,
  IsDevelopmentEnv?:boolean
}
