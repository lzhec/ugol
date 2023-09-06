import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, HttpClientModule],
  providers: [AuthenticationService],
})
export class AuthModule {}
