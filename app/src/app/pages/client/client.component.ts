import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { ClientService } from "src/app/services/client.service";
import { ClientModel } from "../models/client";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];
  loader = false;
  color = '#0198c7';
  colorText = 'white';
  headerText = 'Clientes';

  calculateProperties: number;
  calculateEnterprises: number;

  listTotal: any;

  constructor(private clientService: ClientService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllClients();
    this.getTotal();
  }

  /** Get all clients */
  getAllClients() {
    this.loader = true;
    this.clientService.getAllClients()
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
        })
  }

  /** Get clients by name */
  getByName(searchControl: any) {
    if (searchControl.length < 1) {
      return this.getAllClients();
    }
    this.loader = true;
    this.clientService.getByName(searchControl)
      .subscribe((res: ClientModel[]) => {
        this.loader = false;
        this.clients = res;
      },
        err => {
          if (searchControl.length >= 1) {
            this.loader = false;
            this.toastr.error(err.error);
          }
        })
  }

  // Calculates the number of enterprises and properties
  calculateProjects(client: any) {
    let totalProperties = 0;
    let totalEnterprises = 0;

    client.enterprises.forEach((val, index) => {
      totalProperties += Number(val.realties);
      totalEnterprises = index + 1;
    });
    this.calculateEnterprises = totalEnterprises;
    this.calculateProperties = totalProperties;
  }

  /** Get general totals */
  getTotal() {
    this.clientService.getTotal()
      .subscribe((res: any) => {
        this.listTotal = res;
      })
  }
}

