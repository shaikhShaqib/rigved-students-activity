import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { FormActivityComponent } from './form-activity/form-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    FormBuilderDemoComponent,
    FormActivityComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
