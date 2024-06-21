import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { AuthService } from './auth.service';
import { RealTimeService } from './real-time.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  providers: [AuthService, RealTimeService],
  imports: [CommonModule, HomeRoutingModule, FormsModule, RouterModule],
  exports: [],
})
export class HomeModule {}
