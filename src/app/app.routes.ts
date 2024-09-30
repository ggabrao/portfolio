import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', title: 'Home', component: HomeComponent },
    {
        path: 'experience',
        title: 'Experience',
        loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];