import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WizardComponent } from './wizard/wizard.component';
import { SummaryComponent } from './summary/summary.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { adminComponent } from './admin/admin.component';
import { userComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  { path: 'Home', component: HomeComponent },
  { path: 'wizard', component: WizardComponent },
   {path:'summary',component:SummaryComponent},
   {path:'registration',component:RegistrationComponent},
   {path:'login',component:LoginComponent},
   {path:'payment',component:PaymentComponent},
   {path:'admin',component:adminComponent},
   {path:'user',component:userComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
