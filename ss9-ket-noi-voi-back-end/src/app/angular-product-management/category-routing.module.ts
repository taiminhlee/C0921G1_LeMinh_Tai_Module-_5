import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './catogory/category-list/category-list.component';
import {CategoryCreateComponent} from './catogory/category-create/category-create.component';
import {CategoryEditComponent} from './catogory/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './catogory/category-delete/category-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'delete/:id',
    component: CategoryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
