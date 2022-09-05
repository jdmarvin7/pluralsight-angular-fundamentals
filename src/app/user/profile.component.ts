import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  //templateUrl: './profile.component.html'
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { backgound-color: #E3C3C5; }
    .error :: webkit-input-placeholder { color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error : -moz-placeholder { color: #999; }
    .error :ms-input-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  firstName!: FormControl
  lastName!: FormControl

  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.service.currentUser.userName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*')
    ])
    this.lastName = new FormControl(this.service.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFistName() {
    return this.firstName.invalid && this.firstName.touched
  }

  saveProfile({firstName, lastName}: any) {
    if(this.profileForm.valid) {
      this.service.currentUser = {
        id: 1,
        userName: firstName,
        firstName: firstName,
        lastName: lastName
      }
      this.toast.success('Profil saved')

      this.router.navigate(['/events'])
    }
  }
  cancel() {
    this.router.navigate(['/events'])
  }

}
