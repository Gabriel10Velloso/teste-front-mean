import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./pages/enterprise/enterprise.module').then(m => m.EnterpriseModule)
  },
  { path: '', redirectTo: 'client', pathMatch: 'full'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
