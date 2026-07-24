import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EditfromComponent } from './editfrom/editfrom.component';

const routes: Routes = [
  {path:"add",component:AddstudentComponent},
  {path:"studentlist",component:StudentlistComponent},
  {path:"editform",component:EditfromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
