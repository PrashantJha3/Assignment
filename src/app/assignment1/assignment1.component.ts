import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

changeText: boolean;
  constructor() { 
  this.changeText = false;
 
  }
   elements: any = [
    {id: 1, name: 'Mark', location: 'Bangalore'},
    {id: 2, name: 'Jacob', location: 'Bangalore'},
    {id: 3, name: 'Larry', location: 'Bangalore'},
  ];

  headElements = ['ID', 'Name', 'Location'];

  ngOnInit(): void {
  }

}
