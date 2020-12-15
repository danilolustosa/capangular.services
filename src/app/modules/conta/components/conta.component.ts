import { Component } from '@angular/core';
import { ContaService } from 'src/app/services/conta/conta.service';
import { Conta } from './../../../models/conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  providers: []
})
export class ContaComponent {
  conta:Conta = { };

  constructor(private service:ContaService){  }

  save(){
    this.service.post(this.conta);
  }


}
