import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductsSearchComponent } from './components/products-search/products-search.component';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterPipe,
    ProductsSearchComponent,
    ProductsSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ProductListComponent],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class ProductsModule { }
