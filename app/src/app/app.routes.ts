import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ToolsPage } from './pages/tools-page/tools-page';
import { DomainDetailsPage } from './pages/domain-details-page/domain-details-page';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'domainDetails/:domainId', component: DomainDetailsPage },
    { path: 'tools', component: ToolsPage },
];
