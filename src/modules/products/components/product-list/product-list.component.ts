import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/modules/shared/models/service.models';
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

  products?: Product[]

  // constructor(psr:ProductsService) {
  //   this.productServiceRef = psr
  // }

  constructor(private productSvc: AppService<Product, ResponseMessage>) {
    console.log('ContactList component created')
  }

  private getProducts(){
    const obs:  Observable<ResponseMessage> | undefined = this.productSvc.getAll();
    obs?.subscribe((resp: ResponseMessage) =>{
      if(resp.code === 200){
        this.products = <Product[]>resp.data
      }else {
        alert(resp.errormessage)
      }
    })
  }


  deleteProduct(id: string){
    this.productSvc.remove<string>(id)?.subscribe(
      (resp: ResponseMessage) => {
        if (resp.code === 200) {
          alert(<string>resp.data)
          this.getProducts()
        } else
          alert(resp.errormessage)
      }
    )
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

