import { ProductsRoutingModule } from './products-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { StarComponent } from './components/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductsService } from './services/products.service';
import { AppService } from '../shared/models/service.models';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterPipe,
    ProductsSearchComponent,
    ProductsSearchComponent,
    StarComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, ProductsRoutingModule],
  exports: [ProductListComponent],
  providers: [{ provide: AppService, useClass: ProductsService }],
  bootstrap: [ProductListComponent],
})
export class ProductsModule {}
