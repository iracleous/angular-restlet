import { Injectable } from '@angular/core';

import { Observable }  from 'rxjs';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }
readonly baseUrl = 'http://localhost:9000/v1/';

 username = 'dimitris';
 password = 'dimitris';

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(
    this.baseUrl+'product',
      {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa( this.username+':'+this.password)})}
  );

}

addProduct(values):Observable<any>{
  console.log(values.get('name').value);
  return this.http.post(
    this.baseUrl+'product/',
  {
      'name':values.get('name').value,
      'price':values.get('price').value,
      'inventoryQuantity':values.get('inventoryQuantity').value
  },
  {
    headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})}
  );

}

}
