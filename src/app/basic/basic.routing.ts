import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { StructureComponent } from './structure/structure.component';

export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'infrastructure',
        component: InfrastructureComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'structure',
        component: StructureComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    ]
}];
