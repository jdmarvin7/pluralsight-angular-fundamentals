import { IUser } from './../events/shared/user.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: userName,
      lastName: 'Mael',
      userName
    }
  }

  isAuthenticateUser() {
    return this.currentUser;
  }
}
