import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/products.model';
import { ResponseMessage } from '../../models/responsemessage.model';
import { ProductsService } from '../../services/products.service';


@Component({
  //All in this are know as metadata
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductsService] //Component Level registration
})
export class ProductListComponent implements OnInit {
  listFilterText = ''
  private productServiceRef?: ProductsService;
  products?: Product[]

  constructor(psr:ProductsService) {
    // this.productServiceRef = new ProductsService();
    this.productServiceRef = psr
  }
  private getProducts(){
    const obs:  Observable<ResponseMessage> | undefined = this.productServiceRef?.getProducts();
    obs?.subscribe((resp: ResponseMessage) =>{
      if(resp.code === 200){
        this.products = <Product[]>resp.data
      }else {
        alert(resp.errormessage)
      }
    })
  }


  removeProducts(id: number){
    const obs:  Observable<ResponseMessage> | undefined = this.productServiceRef?.removeProducts(id);
    obs?.subscribe((resp: ResponseMessage) =>{
      if(resp.code === 200){
        this.products = <Product[]>resp.data
        this.getProducts()
      }else {
        alert(resp.errormessage)
      }
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }

  // ngOnDestroy(): void {
  //   this.removeProducts()
  // }

  updateFilterText(filterTextData: string) {
    this.listFilterText = filterTextData
  }

}

