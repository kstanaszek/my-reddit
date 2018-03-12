import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { MoreInfoComponent } from "./more-info/more-info.component";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { CommonModule } from "@angular/common";

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'more-info', component: MoreInfoComponent },
    { path: ':id', component: ProductComponent }
]

@NgModule({
    declarations: [
        MainComponent,
        MoreInfoComponent,
        ProductsComponent,
        ProductComponent
    ],
    exports: [
        MainComponent,
        MoreInfoComponent,
        ProductsComponent,
        ProductComponent
    ],
    imports: [CommonModule, RouterModule]
})

export class ProductsModule { }