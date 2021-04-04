import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { EnterpriseService } from "src/app/services/enterprise.service";
import { ClientModel } from "../models/client";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  color = '#248da5';
  colorText = 'white';
  headerText = 'Empreendimentos';
  loader = false;
  clients: ClientModel[];

  constructor( private enterpriseService: EnterpriseService,
               private toastr: ToastrService,
             ) { }

  ngOnInit(): void {
    this.getAllEnterprises();
  }

  /** Get all clients */
  getAllEnterprises() {
    this.loader = true;
    this.enterpriseService.getAllEnterprises()
      .subscribe((res: ClientModel[]) => {
        this.loader = false;
        this.clients = res;
      },
        err => {
          if (err.statusText === 'Unknown Error') {
            this.loader = false;
            return this.toastr.error('Servidor desligado', 'OPS !!!');
          }
          this.loader = false;
          this.toastr.error(err.error);
        });
  }
}
