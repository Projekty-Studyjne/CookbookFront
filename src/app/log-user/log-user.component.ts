import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent {


  private route = inject(ActivatedRoute);

  constructor(private router: Router, private userService: UserService) {
    if(this.router.url.startsWith("/LogInUser")){
      const id = Number(this.route.snapshot.paramMap.get('id'));
      userService.setLoggedIn(true, id);
    }
    else if (this.router.url.startsWith("/LogOutUser")){
      console.log("Wylogowany uzytkownik");
      userService.setLoggedIn(false, 0);
    }
  }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['']);
    }, 2000);
  }

}
