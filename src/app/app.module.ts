import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';

// Componentes
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { WallComponent } from './componentes/wall/wall.component';
import { WallWriteComponent } from './componentes/wall/wall-write.component';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

// Servicios
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './servicios/auth.service';
import { WallService } from './services/wall.service';
import { ProfileComponent } from './componentes/profile/profile.component';
// import {ProfileNameComponent} from './componentes/wall/wall.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    WallComponent,
    WallWriteComponent,
    KeysPipe,
    ProfileComponent,
    // ProfileNameComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, WallService],
  bootstrap: [AppComponent]
})
export class AppModule {}
