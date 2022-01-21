import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages'




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  avatar: any;
  humor: any;
  psw: any;

  formAvatar: any;
  formHumor: any;
  formPsw: any;

  validPsw: boolean = false;


  constructor(
    private usersService: UsersService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.username = localStorage?.getItem('currentUserUsername') || "";
    this.usersService.getUserByUsername(this.username)
      .subscribe((res: any) => {
        console.log(res);
        this.avatar = res.user.avatar;
        this.humor = res.user.humeur;

      });

  }

  onSubmit(): void {
    this.usersService.checkUserPsw(this.psw, this.username)
      .subscribe((res: any) => {

        if (!res.success) {
          this.flashMessage.show(
            res.message,
            { cssClass: 'alert-danger', timeout: 5000 })
        }
        else {

          if (this.formPsw) this.psw = this.formPsw;
          if (this.formAvatar) this.avatar = this.formAvatar;
          if (this.formHumor) this.humor = this.formHumor;

          this.usersService.updateUser(this.username, this.psw, this.avatar, this.humor)
            .subscribe((res: any) => {

              this.flashMessage.show(
                res.message,
                { cssClass: 'alert-success', timeout: 5000 }
              );


            }, (err: any) => {
              console.log(err);
              this.flashMessage.show(
                err.error.message,
                { cssClass: 'alert-danger', timeout: 5000 })

            });
        }

      });


  }

}
