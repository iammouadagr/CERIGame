import { Component, OnInit, Input } from '@angular/core';
import {
  DialogLayoutDisplay,
  ConfirmBoxInitializer
} from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {

  @Input type: string;
  @Input msg: string;

  constructor() { }

  ngOnInit(): void {
    this.notificationBox();
  }
  notificationBox() {

    const notificationBox = new ConfirmBoxInitializer();
    notificationBox.setMessage(this.msg);
    notificationBox.setButtonLabels('Continuer');


    switch (this.type) {
      case "SUCCESS":
        notificationBox.setConfig({
          LayouType: DialogLayoutDisplay.SUCEESS
        });
        break;
      case "ERROR":
        notificationBox.setConfig({
          LayouType: DialogLayoutDisplay.DANGER
        });
        break;


      default:
        notificationBox.setConfig({
          LayouType: DialogLayoutDisplay.INFO
        });
        break;
    }
  }

}
