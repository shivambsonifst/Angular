import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../inventory.component';


@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(products:IProduct[] ) {

    products.sort(this.GetSortOrder("productName"));
    for (let item in products) {
        if (products[item].productName) {
               return ;    
        }
    }
  }
  GetSortOrder(prop: string | number) {
    return function (a:any, b:any) {
        if (a[prop] > b[prop]) {
            return 1;
        }
        if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

}

