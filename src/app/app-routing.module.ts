import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';
import { ProdutoComponent } from './components/views/produto/produto.component';
import { CategoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'categoria',
    component: CategoriaComponent,
    canActivate: [authGuard]
  },

  {
    path: 'categoria/create',
    component: CategoriaCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'categoria/update/:id',
    component: CategoriaCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'produto/create',
    component: ProdutoCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'produto/update/:id',
    component: ProdutoCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'produto',
    component: ProdutoComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
