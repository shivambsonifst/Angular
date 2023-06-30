import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'firstName'
})


export class FirstPipe implements PipeTransform {

    transform(fullName: string): any {
        return fullName.slice(0,1)
    }
}

