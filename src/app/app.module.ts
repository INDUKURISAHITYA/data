import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {EmpserviceService} from './empservice.service'
import { ServiceGetService} from './service-get.service'
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule,RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { ComponentiteractionComponent } from './componentiteraction/componentiteraction.component';
import { PipeComponent } from './pipe/pipe.component';
import { AgePipe } from './age.pipe';
import { HidemobilePipe } from './hidemobile.pipe';
import { CustompipesPipe } from './custompipes.pipe';
import { ServicesComponent } from './services/services.component';
import { ServiceurlComponent } from './serviceurl/serviceurl.component';
import { CovidpipePipe } from './covidpipe.pipe';
import { CoviderviceService} from './covidervice.service';
import { ServicegetPipe } from './serviceget.pipe';
import { ServiceurlPipe } from './serviceurl.pipe';
import {FormService} from './form.service';








@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    TestComponent,
    InterpolationComponent,
    StructuralDirectiveComponent,
    BindingComponent,
    EventbindingComponent,
    ComponentiteractionComponent,
    PipeComponent,
    AgePipe,
    HidemobilePipe,
    CustompipesPipe,
    ServicesComponent,
    ServiceurlComponent,
    CovidpipePipe,
    RoutingComponent,
    ServicegetPipe,
    ServiceurlPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [EmpserviceService, ServiceGetService,CoviderviceService,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
