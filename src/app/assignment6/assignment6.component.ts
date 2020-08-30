import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Products } from '../products';
@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {

  constructor(private rs : RestService ) { }
  
 columns = ["Product Name", "Quantity"];
 index = ["name","quantity"];
 
 products : Products[] = [];
  ngOnInit(): void {
	  this.rs.getProducts().subscribe
	  (
	  (response) =>
	  {
		  this.products = response;
	  },
	  (error) =>
	  {
		  console.log("Error Occured : "+error);
	  }
	  ) 
  }
}
