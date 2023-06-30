import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'displayPipe'
})


export class DisplayPipe implements PipeTransform {

    transform(datepipeList:string[]): any {
        return datepipeList.sort();
    }
}

