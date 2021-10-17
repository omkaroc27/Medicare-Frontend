import { Component, OnInit } from '@angular/core';
import { User } from '../modal/Modal';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: string;
  password: string;
  email: string;
  address:string;

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {

  }

  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }

}
