import { Component, OnInit } from '@angular/core';
import { AuthService, UserRole } from './auth.service';
import { RealTimeService } from './real-time.service';







@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userRole: UserRole = UserRole.Visitor;
  messageCount: number = 0;
  connectedMemberscount: number = 0;

  constructor(
    private authService: AuthService,
    private realTimeService: RealTimeService
  ) {}

  ngOnInit(): void {
    this.authService.getUserRole().subscribe((role) => (this.userRole = role));

    this.realTimeService
      .getMessageCount()
      .subscribe((count) => (this.messageCount = count));

    this.realTimeService
      .getConnectedMembersCount()
      .subscribe((count) => (this.connectedMemberscount = count));
  }
}
