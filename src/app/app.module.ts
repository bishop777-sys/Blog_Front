import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPostComponent } from './main-post/main-post.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http'; 
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MapsComponent } from './maps/maps.component';
import { GMapModule } from 'primeng/gmap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'maps', component: MapsComponent },
  { path: '**', component: NotFoundComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    MainPostComponent,
    PostComponent,
    HeaderComponent,
    BreadcrumbComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
    MenubarModule,
    BreadcrumbModule,
    GMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
