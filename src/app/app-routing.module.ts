import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{path:'products/:productId',component:ProductShopComponent},
{path:'products', component: ProductDetailsComponent},
{path:'', component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
