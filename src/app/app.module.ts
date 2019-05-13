import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { NavigationComponent } from './pages/website/navigation/navigation.component';
import { HomeComponent } from './pages/website/home/home.component';
import { ProductListComponent } from './pages/website/product-list/product-list.component';
import { FooterComponent } from './pages/website/footer/footer.component';
import { RegisterComponent } from './pages/website/customer/register/register.component';
import { LoginComponent } from './pages/website/customer/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductListComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
