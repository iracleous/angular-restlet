import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-productinsert',
  templateUrl: './productinsert.component.html',
  styleUrls: ['./productinsert.component.scss']
})
export class ProductinsertComponent implements OnInit {
form: FormGroup;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl,
      price: new FormControl,
      inventoryQuantity: new FormControl 
    })
  }


  clickSubmit(){
    this.productService.addProduct(this.form).subscribe(productData=> 
      {
        alert(JSON.stringify(productData))
        this.ngOnInit();
      });

    
  }


}
