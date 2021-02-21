import {Component, Input, OnInit} from "@angular/core";
import {BackendErrorInterface} from "../../../types/backendError.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.css']
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('backendErrors') backendErrorsProps: BackendErrorInterface


  errorMessages: string[] = [];

  ngOnInit() {
    console.log(this.backendErrorsProps);

    Object.keys(this.backendErrorsProps).forEach( key => {
      const str = `${key} ${this.backendErrorsProps[key].join(', ')}`
      this.errorMessages.push(str);
    })
  }

}
