import { Component } from '@angular/core';
import { SharedService} from './../services/share/share.service';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

@Component({
 selector: 'parent1-component',
 templateUrl: 'parent1.component.html',
 providers :[SharedService]
})
export class Parent1Component
{
 sharedValue;
 constructor(private sharedService:SharedService){
 this.sharedValue=sharedService.getSharedValue();
 console.log('Parent-1 ' + this.sharedValue.toString());
 }
}
