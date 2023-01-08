import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('') //BehaviorSubject() - to share a stream of data

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }

  //add to wishlist
  addtowishlist(product:any){
    const body = {
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      image:product.image,
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)

  }

  //get wishlist items
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }

  //delete from wishlist
  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id) 
  }
}
