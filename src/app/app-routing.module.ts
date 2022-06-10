import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a'
  },
  { path: 'page-a', loadChildren: './page-a/page-a.module#PageAModule' },
  { path: 'page-b', loadChildren: './page-b/page-b.module#PageBModule' },
  { path: 'page-c', loadChildren: './page-c/page-c.module#PageCModule' },
  {
    outlet: 'secondary',
    path: 'page-overlay-a',
    loadChildren: './page-overlay-a/page-overlay-a.module#PageOverlayAModule'
  },
  {
    outlet: 'secondary',
    path: 'page-overlay-b',
    loadChildren: './page-overlay-b/page-overlay-b.module#PageOverlayBModule'
  },
  {
    path: '**',
    redirectTo: 'page-a'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: 'disabled',
        /**
         * @todo: Check if the library supports (works well with) anchor scrolling (enabled).
         */
        anchorScrolling: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
