import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [LoginComponentComponent, RegistrationComponent],
  imports: [CommonModule,SharedModule],
  providers:[],
})
export class AuthModule { }
