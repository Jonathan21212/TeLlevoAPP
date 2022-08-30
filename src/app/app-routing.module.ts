import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index-chofer',
    loadChildren: () => import('./page/chofer/index-chofer/index-chofer.module').then( m => m.IndexChoferPageModule)
  },
  {
    path: 'index-pasajero',
    loadChildren: () => import('./page/pasajero/index-pasajero/index-pasajero.module').then( m => m.IndexPasajeroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/pasajero/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalle-viaje',
    loadChildren: () => import('./page/pasajero/detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
  },
  {
    path: 'viajes-realizados',
    loadChildren: () => import('./page/pasajero/viajes-realizados/viajes-realizados.module').then( m => m.ViajesRealizadosPageModule)
  },
  {
    path: 'cancelar',
    loadChildren: () => import('./page/pasajero/cancelar/cancelar.module').then( m => m.CancelarPageModule)
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./page/chofer/perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./page/chofer/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'detalle-chofer',
    loadChildren: () => import('./page/chofer/detalle-chofer/detalle-chofer.module').then( m => m.DetalleChoferPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./page/chofer/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./page/chofer/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'pass',
    loadChildren: () => import('./page/chofer/pass/pass.module').then( m => m.PassPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./page/pasajero/pago/pago.module').then( m => m.PagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
