import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any): object {
    let art = value.map(x=>{
      return x.source});
    return [...new Set(art)]
}

}
