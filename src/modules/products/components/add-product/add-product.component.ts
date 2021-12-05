import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/modules/shared/models/service.models';
import { Product } from '../../models/products.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private productSvc: AppService<Product, ResponseMessage>, private router: Router) { }


  submitData(obj: Product) {
    prompt('add?')
    this.productSvc?.add(obj)?.subscribe(
      (resp) => {
        if (resp.code === 200) {
          alert(<string>resp.data)
          this.router.navigate(['/contacts'])
        } else {
          alert(resp.errormessage)
        }
      }
    )
  }

}
