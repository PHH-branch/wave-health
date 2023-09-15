import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'chat-details',
    pathMatch: 'full'
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'chat-details',
    loadChildren: () => import('./pages/chat-details/chat-details.module').then( m => m.ChatDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dr-login',
    loadChildren: () => import('./pages/dr-login/dr-login.module').then( m => m.DrLoginPageModule)
  },
  {
    path: 'dr-signup',
    loadChildren: () => import('./pages/dr-signup/dr-signup.module').then( m => m.DrSignupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  // {
  //   path: 'pin',
  //   loadChildren: () => import('./pages/pin/pin.module').then( m => m.PinPageModule)
  // },
  {
    path: 'pin-v2',
    loadChildren: () => import('./pages/pin-v2/pin-v2.module').then( m => m.PinV2PageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
