import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductinsertComponent } from './productinsert/productinsert.component';
import { ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [ProductListComponent, ProductinsertComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[ProductListComponent,ProductinsertComponent]
})
export class ProductModule { }
