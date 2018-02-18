import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-demo-component',
  templateUrl: './user-demo-component.component.html',
  styleUrls: ['./user-demo-component.component.css']
})
export class UserDemoComponentComponent implements OnInit {

  userName: string;
  url: string

  constructor(private userService: UserService, @Inject('API_URL') api_url: string) {
    this.url = api_url;
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({ name: 'Charlie' })
    this.userName = this.userService.getUser().name + " " + this.url;
    console.log('User name is: ', this.userName)
    
  }

}
