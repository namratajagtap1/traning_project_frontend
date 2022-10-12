import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

public getProducts(){
  return this.http.get(`${baseUrl}/product/`)
}

// public addProduct(product:any){
//   return this.http.post(`${baseUrl}/product/`,product)
// }

public addProduct(product:any){
  return this.http.post(`${baseUrl}/product/`,product);
    }

    
}


