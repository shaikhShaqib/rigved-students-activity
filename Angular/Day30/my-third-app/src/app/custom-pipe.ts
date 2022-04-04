import {Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({
    // name: 'size'
    name: 'salutaion'
})

export class customPipe implements PipeTransform {
    // transform(arg1: string) {
    //     return arg1.length;
    // }

    transform(name: string, gender: string): string {
        if(gender === 'Male') {
            return "Mr." + name;
        } else {
            return "Ms." + name;
        }
    }
}