import { Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";

export const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/view/:id',
        component: ViewProductComponent
    },
    {
        path: 'products/update/:id',
        component: UpdateProductComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    }
]