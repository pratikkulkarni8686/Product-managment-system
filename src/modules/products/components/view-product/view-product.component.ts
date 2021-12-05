import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
} from '@angular/router';
import { AppService } from 'src/modules/shared/models/service.models';
import { Product } from '../../models/products.model';
import { ResponseMessage } from '../../models/responsemessage.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productInfo?: Product;
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private productSvc: AppService<Product, ResponseMessage>
  ) {
    console.log('ViewContact component created');
  }

  ngOnInit(): void {
    const currentRouteSnapshot: ActivatedRouteSnapshot =
      this.currentRoute.snapshot;
    const allParams: Params = currentRouteSnapshot.params;
    const id = (allParams['id']);

    this.productSvc.get<number>(id)?.subscribe((resp: ResponseMessage) => {
      if (resp.code === 200) {
        console.log(resp);
        this.productInfo = <Product>resp.data;
      } else {
        this.productInfo = undefined;
        alert(resp.errormessage);
      }
    });
  }
  goBack() {
    this.router.navigate(['/products']);
  }
}
