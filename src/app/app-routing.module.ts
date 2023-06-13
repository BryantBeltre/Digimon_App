import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alldigimons',
    loadChildren: () => import('./alldigimons/alldigimons.module').then( m => m.AlldigimonsPageModule)
  },
  {
    path: 'onedigimon',
    loadChildren: () => import('./onedigimon/onedigimon.module').then( m => m.OnedigimonPageModule)
  },
  {
    path: 'creador',
    loadChildren: () => import('./creador/creador.module').then( m => m.CreadorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
