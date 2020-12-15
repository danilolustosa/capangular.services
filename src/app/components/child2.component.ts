import { Component } from '@angular/core';
import { SharedService} from './../services/share/share.service';
@Component({
 selector: 'child2-component',
 templateUrl: './child2.component.html',
 providers :[]
})
export class Child2Component {
  sharedValue;
  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Child-2 ' + this.sharedValue.toString());
  }
}
