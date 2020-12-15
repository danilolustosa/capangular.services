import { Injectable } from '@angular/core';
import { Conta } from './../../models/conta.model';

@Injectable()
export class ContaService {

  constructor() { }


  post(conta:Conta){

    console.log('postando a conta para a API');
    console.log(conta);

  }
}
