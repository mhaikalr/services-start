import { Component, Input } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
    selector: "app-account",
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.css"],
    //   providers: [LoggingService]
})
export class AccountComponent {
    @Input() account: { name: string; status: string };
    @Input() id: number;

    constructor(
        private _loggingService: LoggingService,
        private _accountsService: AccountsService
    ) {}

    onSetTo(status: string) {
        this._accountsService.updateStatus(this.id, status);
        // this._loggingService.logStatusChange(status);
    }
}
