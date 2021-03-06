import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';

import { WallComponent } from './componentes/wall/wall.component';
import { WallWriteComponent } from './componentes/wall/wall-write.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'wall', component: WallComponent},
  {path: 'wall-write/:id', component: WallWriteComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
