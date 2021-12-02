import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { sharedRoutes } from "./shared.routes";

@NgModule({
    imports: [RouterModule.forRoot(sharedRoutes)],
    exports:[RouterModule]
})

export class SharedRouteModule {
    
}