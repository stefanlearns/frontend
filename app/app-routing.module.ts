import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllsalesComponent } from './allsales/allsales.component';
import { AllusersComponent } from './allusers/allusers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent},
  {path: "user", component: UserComponent},
  {path: "allusers", component: AllusersComponent},
  {path: "allsales", component: AllsalesComponent},
  {path: "uploads", component: UploadsComponent},
  {path: "upload-files", component: UploadFilesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
