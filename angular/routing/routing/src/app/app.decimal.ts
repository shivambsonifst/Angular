import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'decimalPipe'
})


export class DecimalPipe implements PipeTransform {

     transform(value: Array<number>): any {
        return value.map(num => num.toFixed(2));
  }
}

