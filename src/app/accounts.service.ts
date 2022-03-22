import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    
    accounts = [
        {
            name: "Master Account",
            status: "active",
        },
        {
            name: "Testaccount",
            status: "inactive",
        },
        {
            name: "Hidden Account",
            status: "unknown",
        },
    ];

    constructor(private _loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({ name, status });
        this._loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this._loggingService.logStatusChange(status);
    }
}
