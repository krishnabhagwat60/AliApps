import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {User} from '../../../_models';
import {UserService} from '../../../_services';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})


export class UserAddComponent implements OnInit {
  dataSaved = false;
  userForm: any;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  constructor(private titleService: Title, private formbulider: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.formbulider.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      genderId: ['', [Validators.required]],

    });
    
  }

  onSubmit(){
    this.titleService.setTitle('Add User');
    this.dataSaved = false;
    const user = this.userForm.value;
    user.userTypeId = '5cb5ae45dbe4973a7ce65c72';
    this.CreateUser(user);
    this.userForm.reset();
  }

  CreateUser(user: User) {
    if (this.userIdUpdate == null) {
      this.userService.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
     
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.userId = this.userIdUpdate;
      this.userService.updateUser(user).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
       
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
  

  deleteUser(userId: string) {
    
    if (confirm("Are you sure you want to delete this ?")) {  
    this.userService.deleteUserById(userId).subscribe(() => {
      this.dataSaved = true;
      this.massage = 'Record Deleted Succefully';
      this.userIdUpdate = null;
      this.userForm.reset();

    });
  }
}

}
