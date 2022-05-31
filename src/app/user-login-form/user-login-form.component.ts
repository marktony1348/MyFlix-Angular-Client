import { Component, OnInit, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegistrationService } from '../fetch-api-data.service';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
   // the fields for the form
  @Input() userData = { Username: '', Password: ''};

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  // This is the function responsible for sending the form inputs to the backend
loginUser(): void {
  this.fetchApiData.userLogin(this.userData).subscribe((response) => {
// Logic for a successful user login goes here! (To be implemented)
   this.dialogRef.close(); // This will close the modal on success!
   console.log(response)
   // Add token and username to local Storage
   localStorage.setItem('token', response.token);
   localStorage.setItem('user', response.user.Username);
   this.snackBar.open(response, 'OK', {
      duration: 2000
   });
  }, (response) => {
    this.snackBar.open(response, 'OK', {
      duration: 2000
    });
  });
}

}
