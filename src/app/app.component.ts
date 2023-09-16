import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  faHouse = faHouse;
  private userService: UserService = inject(UserService);
  constructor(private router:Router){}

  redirectToProfile(){
    console.log("xpp");
    if(this.userService.getIsLoggedIn()){
      window.location.href = 'http://localhost:5121/Users/AccountPanel/'+this.userService.getUserId();
    }
    else{
      window.location.href ='http://localhost:5121/Users/login';
    }
  }
}
