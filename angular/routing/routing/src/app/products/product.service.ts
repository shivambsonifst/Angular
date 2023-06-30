import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  addMessage: String = ''

  info(message: String): String {
    console.log(message);
    this.addMessage = message;
    return this.addMessage;
  }
}
