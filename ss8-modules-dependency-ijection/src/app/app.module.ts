import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductCreateComponent} from './angular-product-management/product/product-create/product-create.component';
import {ProductListComponent} from './angular-product-management/product/product-list/product-list.component';
import {ProductRoutingModule} from './angular-product-management/product-routing.module';
import { ProductEditComponent } from './angular-product-management/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './angular-product-management/product/product-delete/product-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CategoryCreateComponent } from './angular-product-management/catogory/category-create/category-create.component';
import { CategoryEditComponent } from './angular-product-management/catogory/category-edit/category-edit.component';
import {CategoryRoutingModule} from './angular-product-management/category-routing.module';
import {AppRoutingModule} from './app-routing.module';
import {CategoryDeleteComponent} from './angular-product-management/catogory/category-delete/category-delete.component';
import {SharedModule} from './angular-product-management/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
