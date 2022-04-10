import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgFormValidComponent } from './ng-form-valid/ng-form-valid.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFormComponent,
    NgFormValidComponent,
    FormValidationComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
