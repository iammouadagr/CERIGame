import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUserByUsername(username: string) {
    return this.httpClient.get(`${environment.apiUrl}/users/profile/${username}`)
  }

  checkUserPsw(psw: string, username: string) {

    return this.httpClient.post(
      `${environment.apiUrl}/users/profile/checkPassword`,
      {
        username: username,
        psw: psw
      }
    )
  }

  updateUser(username: string, psw: string, avatar: string, humor: string): any {

    return this.httpClient.post(
      `${environment.apiUrl}/users/profile/update`,
      {
        username: username,
        newPsw: psw,
        avatar: avatar,
        humor: humor
      }
    )

  }
}
