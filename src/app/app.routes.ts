import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    // { path: 'profile', component: Profile },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'user/:id/:name', component: User },
    { path: '', component: Home },
    { path: 'profile', component: Profile, data:{name:'Anil Sidhu'}},
    { path: '**', component: PageNotFound }
]