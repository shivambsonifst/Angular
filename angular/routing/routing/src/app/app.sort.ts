import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortPipe'
})


export class SortPipe implements PipeTransform {

    transform(namepipeList:string[]): any {
        return namepipeList.sort();
    }
}

