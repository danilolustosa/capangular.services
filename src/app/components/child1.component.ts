import { Component } from '@angular/core';
import { SharedService} from './../services/share/share.service';
@Component({
 selector: 'child1-component',
 templateUrl: './child1.component.html',
 providers :[]
})
export class Child1Component
{
 sharedValue;
 constructor(private sharedService:SharedService){
  this.sharedValue=sharedService.getSharedValue();
  console.log('Child-1 ' + this.sharedValue.toString());
 }
}
