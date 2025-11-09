import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';
import { Admin } from './admin/admin';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    // { path: 'profile', component: Profile },
    // { path: 'admin', component: Admin },
    // This is Lazy Loading!! 
    { path: 'admin', loadComponent: () => import('./admin/admin').then((c) => c.Admin) },

    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'user/:id/:name', component: User },
    { path: 'profile', component: Profile, data: { name: 'Anil Sidhu' } },
    { path: 'home', component: Home },
    // { path: '**', component: PageNotFound }
]