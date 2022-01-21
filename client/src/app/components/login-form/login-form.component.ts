import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() formTitle: string;
  @Input() formSubtitle: string;

  title: string = "CERIGame - Authentification";

  email: string;
  psw: string;

  signInButton: string = "Se connecter";


  constructor(
    private auth: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit() {

    this.auth.login(this.email, this.psw)
      .subscribe((res: any) => {
        console.log(res);
        this.auth.storeUserData(res);
        this.flashMessage.show(
          "Bienvenue " + res.user.prenom + ". Dernière connexion : " + res.session.lastConnection + " T'es prêt pour un nouveau défi ? ",
          { cssClass: 'alert-success', timeout: 5000 }
        );

        this.router.navigate(['/home']);
      }, (err: any) => {
        console.log(err);
        this.flashMessage.show(
          err.error.message,
          { cssClass: 'alert-danger', timeout: 5000 })

      });


  }



}
