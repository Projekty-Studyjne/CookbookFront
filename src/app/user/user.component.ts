import { Component, Input, inject } from '@angular/core';
import { UserResponse } from '../model/DTO/user-response';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() id?: number;
  user?: UserResponse;
  private service: UserService = inject(UserService);

  constructor() {}

  ngOnInit(){
    if(this.id){
      this.service.getUserByRating(this.id).subscribe(
        {
          next: (res)=>{
            this.user=res;
            console.log(this.user);
          }
        }
      )
    }
  }
}
