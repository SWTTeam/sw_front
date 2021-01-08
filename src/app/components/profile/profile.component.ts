import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  oldPassword : string;
  newPassword : string;
  confirmPassword : string;
  message : string = "";

  constructor(private profile : ProfileService, public login : LoginService) { }

  ngOnInit(): void {
  }

  updateUser(){
    let currentUser : string = this.login.username;
    console.log(currentUser);
    let updateUser = new NewUser(currentUser, this.newPassword, this.confirmPassword);
    if (updateUser.password === updateUser.confirmPassword){
      let user = new User(this.login.username, this.newPassword);
      this.profile.updateProfile(user).subscribe(
        () => {
          this.message = "Password Changed";
        },
        (error) => {
          this.message = "Password Was Not Changed";
          console.log(error);
        }

      );
    }else{
      this.message = "Your Passwords Did Not Match";
      console.log("Passwords do not match.");
    }
  }

}
