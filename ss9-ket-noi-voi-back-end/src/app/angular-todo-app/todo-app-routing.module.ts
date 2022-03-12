import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';
import {CreateComponent} from './create/create.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'create', component: CreateComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TodoAppRoutingModule { }
