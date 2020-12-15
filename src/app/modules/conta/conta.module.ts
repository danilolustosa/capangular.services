import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContaComponent } from './components/conta.component'
import { ContaService } from 'src/app/services/conta/conta.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContaComponent
  ],
  imports: [
    BrowserModule,
    AppModule,
    FormsModule
  ],
  providers: [ContaService],
  bootstrap: []
})
export class AppModule { }
