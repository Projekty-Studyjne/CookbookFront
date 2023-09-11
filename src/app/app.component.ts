import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  faHouse = faHouse;

  constructor(private router:Router){}
  goToProfile(){
    this.router.navigateByUrl('localhost:7121/Profile')
  }
}
