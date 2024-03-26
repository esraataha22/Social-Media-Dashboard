import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
const routes: Routes = [
  {
    path: 'facebook',
    component:FacebookComponent,
  },
  {
    path: 'twitter',
    component:TwitterComponent,
  },
  {
    path: 'instagram',
    component:InstagramComponent,
  },
  {
    path: 'linkedin',
    component:LinkedinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
