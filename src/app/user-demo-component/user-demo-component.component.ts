import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { AnalyticsService } from '../services/analytics-service';
import { Metric } from '../analytics-demo/analytics-demo-interface';

@Component({
  selector: 'app-user-demo-component',
  templateUrl: './user-demo-component.component.html',
  styleUrls: ['./user-demo-component.component.css']
})
export class UserDemoComponentComponent implements OnInit {

  userName: string;

  constructor(private userService: UserService, @Inject('API_URL') private api_url: string, private analyticalService: AnalyticsService) {
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({ name: 'Charlie' });
    this.userName = this.userService.getUser().name + ' ' + this.api_url;
    console.log('User name is: ', this.userName);

    const metric: Metric = {
      eventName: 'loggedIn',
      scope: 'nate'
    };
    this.analyticalService.record(metric);

  }

}
