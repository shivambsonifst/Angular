import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})

export class ProductsComponent {

  title = "User Details";
  list = [
    { id: 1, name: "Person1", age: 25 },
    { id: 2, name: "Person2", age: 26 },
    { id: 3, name: "Person3", age: 27 }
  ]

  message: String = "";
  /* Working with Services and DI */
  constructor(private productService: ProductService) { }
  ngOnInit() {
    let message = this.productService.info("Working with Services and DI");
    this.message = message;
  }

}
