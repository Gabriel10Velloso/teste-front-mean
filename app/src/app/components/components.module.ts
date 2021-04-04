import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// MATERIAL MODULE
import { MaterialModule } from './material.module';

// FLEX MODULE ANGULAR
import { FlexLayoutModule } from '@angular/flex-layout';

// COMPONENTS
import { NavbarComponent } from './navigation/navbar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],

  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // Components
    NavbarComponent,
    LoaderComponent
  ],
  providers: [ ],
})
export class ComponentsModule { }




