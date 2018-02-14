import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-demo-component',
  templateUrl: './user-demo-component.component.html',
  styleUrls: ['./user-demo-component.component.css']
})
export class UserDemoComponentComponent implements OnInit {

  userName: string;
  userService: UserService;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService = injector.get(UserService);
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({ name: 'Charlie' })
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName)
  }

}
