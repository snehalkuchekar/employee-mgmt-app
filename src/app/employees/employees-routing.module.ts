import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

const routes: Routes = [
  {
      path: '', component: EmployeesComponent,
      children: [
          { path: '', component: ListComponent },
          { path: 'add', component: AddEditComponent },
          { path: 'edit/:id', component: AddEditComponent }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
