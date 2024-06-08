import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "../login/login.component";
import { HomeRoutingModule } from "./home-routing.module";
import { AuthService } from "./auth.service";
import { RealTimeService } from "./real-time.service";



@NgModule({
  declarations: [LoginComponent, HomeComponent],
  providers : [AuthService, RealTimeService],
  imports: [CommonModule, HomeRoutingModule, NgModule],
})

export class HomeModule { }