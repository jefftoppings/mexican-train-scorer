import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureComponent } from 'src/components/configure/configure.component';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'configure', component: ConfigureComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
