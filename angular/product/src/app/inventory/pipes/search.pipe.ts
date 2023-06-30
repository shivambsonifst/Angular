import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../inventory.component';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: IProduct[], reactiveForm: string) {

      let searchId = products.filter(product => product.productId === parseInt(reactiveForm));
      let searchName = products.filter(product => product.productName === reactiveForm);
      if (searchId.length > 0 || searchName.length > 0) {
        for (var i = 0; i <products.length; i++) {
          if (products[i].productId === parseInt(reactiveForm) || products[i].productName === reactiveForm) {
            return products[i];
          }
        }
      }
      return null;
    }
}