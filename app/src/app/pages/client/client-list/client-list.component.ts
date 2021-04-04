import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { ClientModel } from '../../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  color = '#0198c7';
  colorText = 'white';
  headerText = 'Cliente';
  clientId: any;
  loader = false;
  clients: ClientModel[];
  clientModal: ClientModel;
  listTotal: any;

  @ViewChild('clientDialog', { static: false }) clientDialog: TemplateRef<any>; // open modal ref

  constructor(private clientService: ClientService,
    private readonly route: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.getClientId(this.clientId);
    this.getClientIdTotal(this.clientId);
  }

  /** Get a client by _id */
  getClientId(id: number) {
    this.loader = true;

    this.clientService.getClientId(id)
      .subscribe((res: ClientModel[]) => {
        this.loader = false;
        this.clients = res;
      },
        err => {
          this.loader = false;
          this.toastr.error(err.error);
        }
      )
  }

  /** Get client totals */
  getClientIdTotal(id) {
    this.clientService.getClientIdTotal(id)
      .subscribe((res: any) => {
        this.listTotal = res;
      })
  }

  // OPEN MODA
  openDialogModal(): void {
    this.dialog.open(this.clientDialog, {
      disableClose: false,
      width: "500px"
    });
  }

  /** Get all enterprises by client */
  getClientIdEmterprise(id) {
    this.loader = true;
    this.clientService.getClientIdEmterprise(id)
      .subscribe((res: ClientModel) => {
        this.loader = false;
        this.clientModal = res;
        this.openDialogModal();
      },
        err => {
          this.loader = false;
          this.toastr.error(err.error);
        }
      )
  }

  /** Get enterprises by client and name */
  getEmterprisesClientId(string1, num1) {
    this.loader = true;
    this.clientService.getEmterprisesClientId(string1, num1)
      .subscribe((res: ClientModel[]) => {
        this.loader = false;
        this.clients = res;
      },
        err => {
          this.loader = false;
          this.toastr.error(err.error);
        }
      )
  }

  getByNameId(searchControl: any) {
    if (searchControl.length < 1) {
      return this.getClientId(this.clientId)
    }
    let num1 = searchControl;
    let string1 = searchControl;
    if (isNaN(num1)) {
      num1 = 'É string';
      this.getEmterprisesClientId(string1, num1)
    } else {
      string1 = 'É número';
      this.getEmterprisesClientId(string1, num1)
    }
  }

}
