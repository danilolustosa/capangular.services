import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './services/logger/logger.service';
import { ProductService } from './services/product/product.service';
import { AppConfig } from './../app/token';
import { Parent1Component } from './components/parent1.component';
import { Parent2Component } from './components/parent2.component';
import { Child1Component } from './components/child1.component';
import { Child2Component } from './components/child2.component';
import { Child3Component } from './components/child3.component';
import { SharedService } from './services/share/share.service';

const APP_CONFIG: Config = Object.freeze({
  serviceURL: "http://localhost:8080",
  IsDevelopmentEnv: true,
  backgroundColor: "white"
})

const isFake = true;

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SharedService,
    ProductService,
    //LoggerService,
    { provide: LoggerService, useClass: LoggerService },
    { provide: AppConfig, useValue: APP_CONFIG },

    //{provide:'USE_FAKE', useValue: true },
    //{provide: ProductService, useFactory: (isFake:boolean, USE_FAKE:boolean) =>
      //isFake ? new FakeProductService() : new ProductService(),
      //deps: [isFake]}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

interface Config {
  serviceURL?:string,
  IsDevelopmentEnv?:boolean,
  backgroundColor?: string
}
