import { Component, Input, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsService],
})
export class AppComponent implements OnInit {
  @Input() accounts: { name: string; status: string }[] = [];

  constructor(private _accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this._accountsService.accounts;
  }

}
