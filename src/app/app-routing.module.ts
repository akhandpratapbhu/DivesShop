import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { AllcategoryComponent } from './catalog/allcategory/allcategory.component';
import { CategoryComponent } from './catalog/category/category.component';
import { DetailsComponent } from './catalog/details/details.component';
import { ListComponent } from './catalog/list/list.component';
import { ReadProductComponent } from './catalog/read-product/read-product.component';
import { DeliveriesdetailsComponent } from './delivery/deliveriesdetails/deliveriesdetails.component';
import { DeliveryComponent } from './delivery/delivery/delivery.component';
import { NewShippersComponent } from './delivery/new-shippers/new-shippers.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './orderprocessing/order/order.component';
import { OrderdetailsComponent } from './orderprocessing/orderdetails/orderdetails.component';
import { CreditCardComponent } from './paymentprocessing/credit-card/credit-card.component';
import { DebitCardComponent } from './paymentprocessing/debit-card/debit-card.component';
import { PaymentsComponent } from './paymentprocessing/payments/payments.component';
import { UPIComponent } from './paymentprocessing/upi/upi.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path:'',component:ListComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'category',component:AllcategoryComponent},
    { path: 'product', component: ReadProductComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'add-product/:id', component: AddProductComponent},
    {path:'category/:id',component:CategoryComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'order',component:OrderComponent},
    {path:'order/:id',component:OrderdetailsComponent},
    {path:'delivery/:id',component:DeliveryComponent},
    {path:'deliverydetail',component:DeliveriesdetailsComponent},
    {path:'payment',component:PaymentsComponent},
    {path:'credit-card',component:CreditCardComponent},
    {path:'debit-card',component:DebitCardComponent},
    {path:'upi',component:UPIComponent},
    {path:'shipper',component:NewShippersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


