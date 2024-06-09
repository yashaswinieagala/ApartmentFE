import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsService } from './user-details.service';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { WizardDetails } from './wizard-details.service';
import { RouterModule } from '@angular/router';
import { adminComponent } from './admin/admin.component';
import { userComponent } from './user/user.component';


@NgModule({
    declarations: [AppComponent,SummaryComponent, LoginComponent,RegistrationComponent, PaymentComponent,adminComponent,userComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        WizardComponent,
        HomeComponent,
        HttpClientModule,
        NgxStripeModule.forRoot('YOUR_STRIPE_PUBLISHABLE_KEY'),
        RouterModule
        
    ],
    providers: [UserDetailsService ,WizardDetails],
    bootstrap: [AppComponent]
})
export class AppModule { }
