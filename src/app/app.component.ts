import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { LoggerService } from './services/logger/logger.service';
import { ProductService } from './services/product/product.service';
import { SharedService } from './services/share/share.service';
import { Parent1Component } from './components/parent1.component';
import { Parent2Component } from './components/parent2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'services';
  products:Product[] = [];

  //constructor(
    //private productService:ProductService
    //) {
  //}

  //getProducts() {
    //this.products=this.productService.getProducts();
  //}
}
