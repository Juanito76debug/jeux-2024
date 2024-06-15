import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "../login/login.component";
import { HomeRoutingModule } from "./home-routing.module";
import { AuthService } from "./auth.service";
import { RealTimeService } from "./real-time.service";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [LoginComponent, HomeComponent],
  providers : [AuthService, RealTimeService],
  imports: [CommonModule, HomeRoutingModule, FormsModule, RouterModule],
})

export class HomeModule { }