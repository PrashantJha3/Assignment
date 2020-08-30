import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css'],  
 
})
export class Assignment4Component implements OnInit {
	

  ngOnInit(): void {
  }

changeText: boolean;
  constructor() { 
  this.changeText = false;
}
  
   elements: any = [
    { name: 'Mouse', quantity: '4'},
    { name: 'Mobile', quantity: '2'},
    { name: 'Laptop', quantity: '4'},
  ];

  headElements = ['Product Name', 'Quantity'];


 
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

}