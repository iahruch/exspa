import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorMessagesComponent} from "./components/backendErrorMessages.component";


@NgModule({
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponent],
  declarations: [BackendErrorMessagesComponent],
  providers: []
})
export class BackendErrorMessagesModule {
}
