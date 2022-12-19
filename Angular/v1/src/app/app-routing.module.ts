import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { RnetProjectsComponent } from './components/companies/rnet/rnet-projects.component';
import { RobemexProjectsComponent } from './components/companies/robemex/robemex-projects.component';
import { TatichProjectsComponent } from './components/companies/tatich/tatich-projects.component';
import { HomeComponent } from './components/home/home.component';
import { CustomPreloadingService } from './services/preload/custom-preloading.service';

const routes: Routes = [
  {path:'', data:{preload: true} ,component:HomeComponent, pathMatch:'full'},
  {path:'about', data:{preload: true}, component:AboutComponent},
  {path:'companies-users', data:{preload: true}, component:CompaniesComponent},
  {path:'skills', data:{preload: true}, component: SkillsComponent},
  {path:'robemex-projects', data:{preload: true}, component:RobemexProjectsComponent},
  {path:'tatich-projects', data:{preload: true}, component:TatichProjectsComponent},
  {path:'rnet-projects', data:{preload: true}, component: RnetProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
