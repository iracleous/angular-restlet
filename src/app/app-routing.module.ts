import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProductListComponent} from './product/product-list/product-list.component';
import{ProductinsertComponent} from './product/productinsert/productinsert.component';

const routes: Routes = [
    {
      path: 'view', 
  component: ProductListComponent},
  {path : 'insert',
    component:ProductinsertComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
