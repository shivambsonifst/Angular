import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../inventory.component';


@Pipe({
  name: 'sortByPartNumber'
})
export class SortByPartNumberPipe implements PipeTransform {

  transform(products:IProduct[]) {

    products.sort(this.GetSortOrder("partNumber"));
    for (let item in products) {
        if (products[item].partNumber) {
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
