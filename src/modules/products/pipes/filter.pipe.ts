// import { Pipe, PipeTransform } from "@angular/core";
// import { Product } from "../models/products.model";
// @Pipe({
//     name: 'filter'
// })

// class FilterPipe implements PipeTransform {
//     transform(arg: Product[],...rest:string[]):any{
//         filterText: = rest[0]
//         return
//     }
// }

import { Pipe } from '@angular/core';
import { Product } from '../models/products.model';

@Pipe({
  name: 'search',
})
export class FilterPipe {
  transform(products: Product[], ...args: string[]): Product[] {
    return args && args[0] && args[0]!==''
      ? products.filter(
          (c) =>
            c.name.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !==
            -1
        )
      : products;
  }
}
