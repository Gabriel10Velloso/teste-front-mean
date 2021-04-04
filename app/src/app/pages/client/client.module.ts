import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
// SERVICES
import { ClientComponent } from './client.component';
// COMPONENTS
import { ComponentsModule } from 'src/app/components/components.module';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: ':id',
    component: ClientListComponent,
  },
];

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ClientService]
})
export class ClientModule { }
