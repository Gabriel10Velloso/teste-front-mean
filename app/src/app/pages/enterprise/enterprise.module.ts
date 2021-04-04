import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
// SERVICES
import { EnterpriseService } from 'src/app/services/enterprise.service';
// COMPONENTS
import { EnterpriseComponent } from './enterprise.component';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseComponent,
  },

];

@NgModule({
  declarations: [
    EnterpriseComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  providers: [EnterpriseService]
})
export class EnterpriseModule {}
