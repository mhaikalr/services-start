import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private _loggingService: LoggingService,
    private _accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this._accountsService.addAccount(accountName, accountStatus);
    this._loggingService.logStatusChange(accountStatus);
  }
}
