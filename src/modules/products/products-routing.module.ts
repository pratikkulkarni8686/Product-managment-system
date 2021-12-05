import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { productRoutes } from "./products.routes";

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports:[RouterModule]
})

export class ProductsRoutingModule {
    
}